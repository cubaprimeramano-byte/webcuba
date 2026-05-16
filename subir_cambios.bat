@echo off
echo ============================
echo Subiendo cambios al repositorio...
echo ============================

:: Ir a la carpeta del proyecto
cd /d "c:\Users\User\Desktop\saudi"

:: Agregar todos los cambios
git add .

:: Crear commit con fecha y hora
set FECHA=%date% %time%
git commit -m "Auto commit %FECHA%"

:: Subir al repositorio (rama main)
git push origin main

echo ============================
echo Proceso terminado
pause
