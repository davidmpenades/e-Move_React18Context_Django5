# Generated by Django 5.0.1 on 2024-02-22 18:10

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
                ('slug', models.SlugField(blank=True, max_length=100, unique=True)),
                ('name', models.CharField(max_length=100)),
                ('num_bikes', models.IntegerField()),
                ('latitude', models.DecimalField(decimal_places=6, max_digits=9)),
                ('longitude', models.DecimalField(decimal_places=6, max_digits=9)),
                ('status', models.CharField(max_length=100)),
                ('img_st', models.CharField(max_length=100)),
            ],
        ),
    ]
