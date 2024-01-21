import requests
import os

base_url = "https://www.serebii.net/swordshield/pokemon/small/"
output_folder = "pokemon_images" # move output to public/assets

if not os.path.exists(output_folder):
    os.makedirs(output_folder)

for pokemon_id in range(1, 152):
    url = f"{base_url}{str(pokemon_id).zfill(3)}.png"
    
    output_path = os.path.join(output_folder, f"{str(pokemon_id).zfill(3)}.png")

    response = requests.get(url)
    if response.status_code == 200:
        with open(output_path, 'wb') as f:
            f.write(response.content)
        print(f"Downloaded {url} to {output_path}")
    else:
        print(f"Failed to download {url}, status code: {response.status_code}")