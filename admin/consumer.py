import json

import pika

import os, django

from products.models import Product

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "admin.settings")
django.setup()

params = pika.URLParameters('amqps://unqrxaqr:mifD-tzWnYRcqylbYfWkUYrEdsrSIEMi@jaguar.rmq.cloudamqp.com/unqrxaqr')

connection = pika.BlockingConnection(params)

channel = connection.channel()

channel.queue_declare(queue='admin')


def callback(ch, method, properties, body):
    print('received in admin')
    id = json.loads(body)
    print(id)
    product = Product.objects.get(id=id)
    product.likes = product.likes + 1
    product.save()
    print('Product likes increased')


channel.basic_consume(queue='admin', on_message_callback=callback, auto_ack=True)

print('Start Consuming')

channel.start_consuming()

channel.close()
