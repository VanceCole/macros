Get-ChildItem -Recurse |
  Foreach-Object {
    $newName = $_.name -replace '[^A-Za-z0-9-_ \.\[\]]', ''
    if (-not ($_.name -eq $newname)){
      Rename-Item -Path $_.fullname -newname ($newName) 
    } 
  }