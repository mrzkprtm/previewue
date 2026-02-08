@echo off
cd /d C:\laragon\www\frontendue

REM Set Node.js path
set NODE_PATH=C:\laragon\bin\nodejs\node-v22
set PATH=%NODE_PATH%;%PATH%

REM Start development server
echo Starting Astro development server...
call "%NODE_PATH%\npm.cmd" run dev
