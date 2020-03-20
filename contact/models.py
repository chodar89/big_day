from django.db import models

from phonenumber_field.modelfields import PhoneNumberField

# Create your models here.


class Customer(models.Model):
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)
    email = models.EmailField(max_length=100)
    phone = PhoneNumberField()
    message = models.TextField(
        max_length=300, blank=True, help_text='Type your message here...')
    created_date = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['created_date']

    def __str__(self):
        return f'{self.first_name}, {self.last_name}'
