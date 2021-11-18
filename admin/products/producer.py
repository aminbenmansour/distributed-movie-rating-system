import pika

params = pika.URLParameters('amqps://unqrxaqr:mifD-tzWnYRcqylbYfWkUYrEdsrSIEMi@jaguar.rmq.cloudamqp.com/unqrxaqr')

connection = pika.BlockingConnection(params)

channel = connection.channel()


def publish():
    channel.basic_publish(exchange='', routing_key='main', body='hello')
