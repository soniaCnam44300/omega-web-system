@echo off
echo ========================================
echo    OMEGA WEB SYSTEM - DEMARRAGE
echo ========================================

REM Verification fichiers
if not exist "backend\server.py" (
    echo ❌ ERREUR: backend\server.py non trouve !
    pause
    exit /b 1
)

if not exist "frontend\package.json" (
    echo ❌ ERREUR: frontend\package.json non trouve !
    pause
    exit /b 1
)

echo ✅ Fichiers OK
echo 🚀 Demarrage Backend...
start "OMEGA Backend" cmd /k "cd /d %~dp0backend && uvicorn server:app --host 0.0.0.0 --port 8001 --reload"

timeout /t 3 /nobreak >nul

echo 🌐 Demarrage Frontend...
start "OMEGA Frontend" cmd /k "cd /d %~dp0frontend && yarn start"

echo ========================================
echo 🎉 OMEGA WEB SYSTEM PRET !
echo ========================================
echo Site: http://localhost:3000
echo API: http://localhost:8001
pause >nul
