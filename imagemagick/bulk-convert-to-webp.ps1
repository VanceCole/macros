# POWERSHELL SCRIPT
# Convert all png/jpg/gif recursively from current directory to webp
Get-ChildItem .\* -R -include *.png, *.jpg, *.jpeg, *.gif |
Foreach-Object {
  magick convert -strip $_.FullName -quality 60 "$($_.FullName.split('.')[0]).webp"
  echo "Converting $_"
}
