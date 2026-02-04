$pathsToAdd = @(
    "C:\laragon\bin\nodejs\node-v22",
    "C:\laragon\bin\php\php-8.3.30-Win32-vs16-x64",
    "C:\laragon\bin\git\cmd"
)

# Get current user Path
$currentPath = [Environment]::GetEnvironmentVariable("Path", "User")
$pathList = $currentPath -split ";"

$newPathList = $pathList
foreach ($path in $pathsToAdd) {
    if ($pathList -notcontains $path) {
        Write-Host "Adding $path to User Environment Variable..."
        $newPathList += $path
    } else {
        Write-Host "$path already exists in Path."
    }
}

# Set permanent User Path
$finalPath = $newPathList -join ";"
[Environment]::SetEnvironmentVariable("Path", $finalPath, "User")

# Set current session Path
foreach ($path in $pathsToAdd) {
    if ($env:Path -split ";" -notcontains $path) {
        $env:Path += ";$path"
    }
}

Write-Host "Success! Node, PHP, and Git paths have been added."
Write-Host "Please restart your terminal (VS Code users: kill terminal and open new one) to apply changes permanently."
Write-Host "Verifying versions..."

node -v
php -v
git --version
