import json
import boto3
import time
import os

# Pega o nome da tabela do DynamoDB das variáveis de ambiente
TABLE_NAME = os.environ.get('VOLUNTARIOS_TABLE_NAME', 'Voluntarios-ONG')
dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table(TABLE_NAME)

# Use '*' para desenvolvimento ou seu domínio específico (ex: 'https://pinheirotecnologia.com')
ALLOWED_ORIGIN = '*' 

CORS_HEADERS = {
    'Access-Control-Allow-Origin': ALLOWED_ORIGIN,
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS' # Adicionado OPTIONS
}

def lambda_handler(event, context):
    
    # 1. Log para debug
    print(f"Recebido evento: {event}")
    
    # --- CORREÇÃO 2: Lidar com requisição CORS Preflight (OPTIONS) ---
    http_method = event.get('httpMethod')
    if http_method == 'OPTIONS':
        # Responde com sucesso ao pré-voo do navegador
        return {
            'statusCode': 204, # 204 No Content
            'headers': CORS_HEADERS,
            'body': ''
        }
    
    # O resto do código assume que é um POST
    try:
        # 2. Carrega os dados enviados pelo formulário (estão no 'body')
        try:
            body = json.loads(event['body'])
        except Exception as e:
            print(f"Erro ao carregar o body JSON: {e}")
            return {
                'statusCode': 400,
                'headers': CORS_HEADERS, # Centralizado
                'body': json.dumps({'message': 'Corpo da requisição inválido. Esperava JSON.'})
            }

        # 3. Lista de todos os campos esperados do formulário
        required_fields = [
            'nome', 
            'email', 
            'cpf', 
            'telefone', 
            'nascimento',
            'cep', 
            'endereco', 
            'cidade', 
            'estado'
        ]
        
        # 4. Validação simples: verifica se todos os campos obrigatórios vieram
        missing_fields = [field for field in required_fields if not body.get(field)]
        
        if missing_fields:
            print(f"Erro: Campos em falta: {missing_fields}")
            return {
                'statusCode': 400,
                'headers': CORS_HEADERS, # Centralizado
                'body': json.dumps({'message': f'Campos obrigatórios em falta: {", ".join(missing_fields)}'})
            }

        # 5. Extrai os dados validados
        cpf = body.get('cpf') # Chave Primária
        data_nascimento = body.get('nascimento')

        # 6. Cria o item a ser salvo no DynamoDB
        item_to_save = {
            'cpf': cpf,
            'nome': body.get('nome'),
            'email': body.get('email'),
            'telefone': body.get('telefone'),
            'dataNascimento': data_nascimento, # Salva como camelCase no DynamoDB
            'cep': body.get('cep'),
            'endereco': body.get('endereco'),
            'cidade': body.get('cidade'),
            'estado': body.get('estado'),
            'status': 'Pendente', # Adiciona um status padrão
            'dataCadastro': int(time.time()) # Data de hoje em timestamp
        }
        
        # 7. Salva o item na tabela do DynamoDB
        table.put_item(Item=item_to_save)
        
        # 8. Retorna sucesso (200 OK)
        return {
            'statusCode': 200,
            'headers': CORS_HEADERS, # Centralizado
            'body': json.dumps({
                'message': 'Cadastro realizado com sucesso!',
                'cpfCadastrado': cpf
            })
        }

    except Exception as e:
        # 9. Captura qualquer outro erro (ex: falha ao escrever no DynamoDB)
        print(f"Erro inesperado: {e}")
        return {
            'statusCode': 500,
            'headers': CORS_HEADERS, # Centralizado
            'body': json.dumps({'message': 'Erro interno no servidor.'})
        }