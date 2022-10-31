![HenryLogo](src/views/imgs/mistbornLogo.png)
# Mistborn API

<h2>Deploy: <a href='https://mistborn-api-production.up.railway.app/'>https://mistborn-api-production.up.railway.app/</a></h2>

#

## Que es esto ?

Esto es una RESTful API creada con Node, Express y Mysql orientada a Mistborn era 1; Una serie de libros escritos por el autor estadounidense Brandon Sanderson.

## Planeas seguir actualizando esta API?

Claro! Por el momento es una API pequeña pero espero, con el tiempo ir ampliandola cada vez mas.
Todavia faltan muchas rutas y datos que agregar.

## Como puedo usarla?

- Ingresa en la pagina.
- Ve a "Profile".
- Crea una cuenta o conectate usando Google.
- En tu perfil veras un api key parecida a esta **'auth0|961dkdqd29cf9b63d060h8dq'**, copiala y guardala.
- A partir de ahora  siempre que hagas una peticion deberas incluir tu api key.
- Puedes probar con esta peticion:  **https://mistborn-api-production.up.railway.app/characters?apiKey=YOUR_API_KEY**.

## Quiero una key con permisos elevados

Una key con permisos elevados permite acceder a las rutas POST PUT Y DELETE.
Como comprenderas no puedo publicar estas claves ya que en manos equivocadas pueden llegar a causar un gran daño en la base de datos.<br>
Si quieres obtener una de estas claves puedes enviarme un mail a  matias.franco289@gmail.com y te proporcionare una :wink:.

# Rutas

## GET: /characters

Devuelve el nombre y el id de 6 personajes.
Puede recibir 3 parametros por  <span style="color:#f92672">**query**</span>

- Como primer parametro recibe un <span style="color:#f92672">**limit**</span>.En caso de no recibirlo o ser invalido sera 6 por defecto. 

- Como segundo parametro recibe un <span style="color:#f92672">**offset**</span>, en caso de no recibirlo o que este no sea valido sera 0 por defecto.

-  Como tercer parametro recibe un <span style="color:#f92672">**order**</span> ( ASC / DESC ), en caso de no recibirlo o que este no sea valido sera ASC por defecto.

        axios.get('https://mistborn-api-production.up.railway.app/characters?apiKey=YOUR_API_KEY&limit=6&offset=0&order=ASC')`<br>
        .then(response => console.log(response));
#
## GET: /characters: id

Recibe por <span style="color:#f92672">**params**</span> el id o nombre de un personaje. Devuelve por defecto su id, nombre, descripcion y estado.


        axios.get('https://mistborn-api-production.up.railway.app/characters/1?apiKey=YOUR_API_KEY&extensive=false')`<br>
        .then(response => console.log(response));
#
## GET: /abilities

Devuelve el id, nombre y descripcion de 6 habilidades.
Puede recibir 3 parametros por  <span style="color:#f92672">**query**</span>

- Como primer parametro recibe un <span style="color:#f92672">**limit**</span>.En caso de no recibirlo o ser invalido sera 6 por defecto. 

- Como segundo parametro recibe un <span style="color:#f92672">**offset**</span>, en caso de no recibirlo o que este no sea valido sera 0 por defecto.

-  Como tercer parametro recibe un <span style="color:#f92672">**order**</span> ( ASC / DESC ), en caso de no recibirlo o que este no sea valido sera ASC por defecto.

        axios.get('https://mistborn-api-production.up.railway.app/abilities?apiKey=YOUR_API_KEY&limit=6&offset=0&order=ASC')
        .then(response => console.log(response));

#
## POST: /abilities
*Se require API key con permisos elevados para esta ruta.*<br>

Recibe por <span style="color:#f92672">**body**</span> un <span style="color:#f92672">**name**</span> y una <span style="color:#f92672">**description**</span> y crea una nueva habilidad.

     axios.post('https://mistborn-api-production.up.railway.app/abilities?apiKey=YOUR_API_KEY',{
        "ability": "ability_name",
        "description": "ability_description"
    })

#
## DELETE: /abilities
*Se require API key con permisos elevados para esta ruta.*<br>

Recibe por <span style="color:#f92672">**query**</span> un <span style="color:#f92672">**name**</span> o una <span style="color:#f92672">**id**</span> de una habilidad y la elimina.

     axios.delete('https://mistborn-api-production.up.railway.app/abilities?apiKey=YOUR_API_KEY&id=Hemalurgy')

#
## PUT: /abilities
*Se require API key con permisos elevados para esta ruta.*<br>

Recibe por <span style="color:#f92672">**query**</span> un <span style="color:#f92672">**id**</span> que contendra la id o el nombre de la habilidad a modificar.<br> 
Ademas recibe varios parametros adicionales por <span style="color:#f92672">**query**</span> :

- <span style="color:#f92672">**col**</span> contendra el nombre de el campo a modificar (ability / description).
- <span style="color:#f92672">**value**</span> contendra el nuevo valor de ese campo.

        axios.put('https://mistborn-api-production.up.railway.app/abilities?apiKey=YOUR_API_KEY&col=description&value=new_description&id=Hemalurgy');
