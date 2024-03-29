# Generated by Django 5.0.1 on 2024-02-23 08:49

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('bikes', '0001_initial'),
        ('stations', '__first__'),
    ]

    operations = [
        migrations.CreateModel(
            name='Slots',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('status', models.CharField(max_length=100)),
                ('slot_num', models.IntegerField()),
                ('bike', models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='slots', to='bikes.bikes')),
                ('station', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='slots', to='stations.stations')),
            ],
        ),
    ]
