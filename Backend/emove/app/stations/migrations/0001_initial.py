# Generated by Django 5.0.1 on 2024-01-23 11:38

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Stations',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('slug', models.SlugField(editable=False, max_length=100, unique=True)),
                ('name', models.CharField(max_length=100)),
                ('num_bikes', models.IntegerField()),
                ('latitude', models.DecimalField(decimal_places=20, max_digits=30)),
                ('longitude', models.DecimalField(decimal_places=20, max_digits=30)),
                ('status', models.CharField(max_length=100)),
                ('img_st', models.CharField(max_length=100)),
            ],
        ),
    ]
