# POWERSHELL SCRIPT
# For transparent png/gifs, will composite onto black background
# All gif/png in current directory
# Can specify any color you want that imagemagick understands
# - f.x. black, white, '#CCDDEE', ec
Get-ChildItem .\* -R -include *.png, *.gif, *.webp |
Foreach-Object {
  magick convert $_.FullName -background black -alpha remove -alpha off "$($_.FullName.split('.')[0].ToLower())_flat$($_.Extension)"
}
