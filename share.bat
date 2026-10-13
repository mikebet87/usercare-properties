@echo off
REM UserCare Properties - local server + public share link (serveo.net)
REM Double-click to run. Keep this window open while sharing.
cd /d "%~dp0"
echo Starting production server...
start "UserCare Server" /min cmd /c "npm run start -- -p 3000 -H 0.0.0.0"
timeout /t 6 /nobreak >nul
echo.
echo Your public link will appear below. Keep this window open.
echo.
ssh -o StrictHostKeyChecking=no -R 80:localhost:3000 serveo.net
pause
