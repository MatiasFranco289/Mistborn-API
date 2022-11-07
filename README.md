![MistbornLogo](src/views/imgs/mistbornLogo.png)
# Mistborn API V2

<h2>Deploy: <a href='https://mistborn-api-production.up.railway.app/'>https://mistborn-api-production.up.railway.app/</a></h2>

#

## Que es esto ?

Esto es una RESTful API creada con Node, Express y Mysql orientada a Mistborn era 1; Una serie de libros escritos por el autor estadounidense Brandon Sanderson.

## Planeas seguir actualizando esta API?

Claro! Planeo sacar nuevas rutas e ir ampliando la base de datos semana a semana.

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

## Que es lo nuevo?
### V2.0 07/11/22

Se agregaron las siguiente rutas:

### Rutas GET:

- GET abilities by id.
- GET abilities by name.
- GET ethnicities by id.
- GET ethnicities by name.
- GET groups by id.
- GET groups by name.

### Rutas PUT:

- PUT abilities by id.
- PUT abilities by name.
- PUT ethnicities by id.
- PUT ethnicities by name.
- PUT groups by id.
- PUT groups by name.

### Rutas DELETE:

- DELETE characters by id.
- DELETE characters by name.
- DELETE abilities by id.
- DELETE abilities by name.
- DELETE ethnicities by id.
- DELETE ethnicities by name.
- DELETE groups by id.
- DELETE groups by name.

### Rutas POST:

- POST characters.
- POST abilities.
- POST ethnicities.
- POST groups.

# Rutas

### *La documentacion se actualizara semanalmente en caso de cambios.* ###

## GET: /characters

Devuelve el nombre y el id de 6 personajes.<br>
Puede recibir hasta 3 parametros opcionales por **query**:

- **limit** define hasta cuantos personajes devolvera la ruta. En caso de no recibirlo su valor sera de 0 por defecto.

- **offset** define desde donde empezara a devolver personajes la ruta (Por ejemplo, dado un valor de 3, ignorara los primeros 3 personajes). En caso de no recibirlo su valor sera 0 por defecto.

-  **order** define el orden alfabetico en el que seran devueltos los personajes.Puede tomar dos valores ( ASC / DESC ). En caso de no recibirlo su valor sera ASC por defecto.

        axios.get('https://mistborn-api-production.up.railway.app/characters?apiKey=YOUR_API_KEY&limit=6&offset=0&order=ASC')
        .then(response => console.log(response));

## GET: /abilities

Devuelve el nombre y el id de 6 habilidades.<br>
Puede recibir hasta 3 parametros opcionales por **query**:

- **limit** define hasta cuantas habilidades devolvera la ruta. En caso de no recibirlo su valor sera de 0 por defecto.

- **offset** define desde donde empezara a devolver habilidades la ruta (Por ejemplo, dado un valor de 3, ignorara las primeras 3 habilidades). En caso de no recibirlo su valor sera 0 por defecto.

-  **order** define el orden alfabetico en el que seran devueltas las habilidades.Puede tomar dos valores ( ASC / DESC ). En caso de no recibirlo su valor sera ASC por defecto.

        axios.get('https://mistborn-api-production.up.railway.app/abilities?apiKey=YOUR_API_KEY&limit=6&offset=0&order=ASC')
        .then(response => console.log(response));

## GET: /ethnicities

Devuelve el nombre y el id de 6 etnias.<br>
Puede recibir hasta 3 parametros opcionales por **query**:

- **limit** define hasta cuantas etnias devolvera la ruta. En caso de no recibirlo su valor sera de 0 por defecto.

- **offset** define desde donde empezara a devolver etnias la ruta (Por ejemplo, dado un valor de 3, ignorara las primeras 3 etnias). En caso de no recibirlo su valor sera 0 por defecto.

-  **order** define el orden alfabetico en el que seran devueltas las etnias.Puede tomar dos valores ( ASC / DESC ). En caso de no recibirlo su valor sera ASC por defecto.

        axios.get('https://mistborn-api-production.up.railway.app/ethnicities?apiKey=YOUR_API_KEY&limit=6&offset=0&order=ASC')
        .then(response => console.log(response));

## GET: /groups

Devuelve el nombre y el id de 6 grupos.<br>
Puede recibir hasta 3 parametros opcionales por **query**:

- **limit** define hasta cuantos grupos devolvera la ruta. En caso de no recibirlo su valor sera de 0 por defecto.

- **offset** define desde donde empezara a devolver grupos la ruta (Por ejemplo, dado un valor de 3, ignorara los primeros 3 grupos). En caso de no recibirlo su valor sera 0 por defecto.

-  **order** define el orden alfabetico en el que seran devueltos los grupos.Puede tomar dos valores ( ASC / DESC ). En caso de no recibirlo su valor sera ASC por defecto.

        axios.get('https://mistborn-api-production.up.railway.app/groups?apiKey=YOUR_API_KEY&limit=6&offset=0&order=ASC')
        .then(response => console.log(response));

## GET: /characters/:id

Devuelve el id, nombre, descripcion y estado de un personaje.<br>
Recibe por **params** la **id** de un personaje.<br>
Recibe por **query** el parametro opcional **extensive** ( true / false ). En caso de no recibirlo su valor sera false por defecto. En caso de ser true devolvera informacion adicional sobre el personaje, como su etnia, grupos a los que pertenece y habilidades.

        axios.get('https://mistborn-api-production.up.railway.app/characters/1?apiKey=YOUR_API_KEY&extensive=false')
        .then(response => console.log(response));

## GET: /abilities/:id

Devuelve el id, nombre y descripcion de una habilidad.<br>
Recibe por **params** la **id** de una habilidad.

        axios.get('https://mistborn-api-production.up.railway.app/abilities/1?apiKey=YOUR_API_KEY')
        .then(response => console.log(response));

## GET: /ethnicities/:id

Devuelve el id, nombre y descripcion de una etnia.<br>
Recibe por **params** la **id** de una etnia.

        axios.get('https://mistborn-api-production.up.railway.app/ethnicities/1?apiKey=YOUR_API_KEY')
        .then(response => console.log(response));

## GET: /groups/:id

Devuelve el id, nombre y descripcion de un grupo.<br>
Recibe por **params** la **id** de un grupo.

        axios.get('https://mistborn-api-production.up.railway.app/groups/1?apiKey=YOUR_API_KEY')
        .then(response => console.log(response));

## GET: /characters/:name

Devuelve el id, nombre, descripcion y estado de un personaje.<br>
Recibe por **params** el **name** de un personaje.<br>
Recibe por **query** el parametro opcional **extensive** ( true / false ). En caso de no recibirlo su valor sera false por defecto. En caso de ser true devolvera informacion adicional sobre el personaje, como su etnia, grupos a los que pertenece y habilidades.

        axios.get('https://mistborn-api-production.up.railway.app/characters/Kelsier?apiKey=YOUR_API_KEY&extensive=false')
        .then(response => console.log(response));

## GET: /abilities/:id

Devuelve el id, nombre y descripcion de una habilidad.<br>
Recibe por **params** el **name** de una habilidad.

        axios.get('https://mistborn-api-production.up.railway.app/abilities/Hemalurgy?apiKey=YOUR_API_KEY')
        .then(response => console.log(response));

## GET: /ethnicities/:id

Devuelve el id, nombre y descripcion de una etnia.<br>
Recibe por **params** el **name** de una etnia.

        axios.get('https://mistborn-api-production.up.railway.app/ethnicities/Skaa?apiKey=YOUR_API_KEY')
        .then(response => console.log(response));

## GET: /groups/:id

Devuelve el id, nombre y descripcion de un grupo.<br>
Recibe por **params** el **name** de un grupo.

        axios.get('https://mistborn-api-production.up.railway.app/groups/Keeper?apiKey=YOUR_API_KEY')
        .then(response => console.log(response));

## PUT: /abilities/:id

### *Esta ruta require permisos elevados.* ###

Edita el nombre o descripcion de una habilidad.<br>
Recibe por **params** el id de una habilidad existente.<br>
Recibe por **body** dos parametros:

- **col** define el campo que sea desea modificar. Su valor puede ser "name" o "description".
- **value** sera el nuevo valor que tomara el campo definido en **col**.

        axios.put('https://mistborn-api-production.up.railway.app/abilities/1?apiKey=YOUR_API_KEY', {
                "col": "name",
                "value": "new name"
        })
        .then(response => console.log(response));

## PUT: /ethnicities/:id

### *Esta ruta require permisos elevados.* ###

Edita el nombre o descripcion de una etnia.<br>
Recibe por **params** el id de una etnia existente.<br>
Recibe por **body** dos parametros:

- **col** define el campo que sea desea modificar. Su valor puede ser "name" o "description".
- **value** sera el nuevo valor que tomara el campo definido en **col**.

        axios.put('https://mistborn-api-production.up.railway.app/ethnicities/1?apiKey=YOUR_API_KEY', {
                "col": "name",
                "value": "new name"
        })
        .then(response => console.log(response));

## PUT: /groups/:id

### *Esta ruta require permisos elevados.* ###

Edita el nombre o descripcion de un grupo.<br>
Recibe por **params** el id de un grupo existente.<br>
Recibe por **body** dos parametros:

- **col** define el campo que sea desea modificar. Su valor puede ser "name" o "description".
- **value** sera el nuevo valor que tomara el campo definido en **col**.

        axios.put('https://mistborn-api-production.up.railway.app/groups/1?apiKey=YOUR_API_KEY', {
                "col": "name",
                "value": "new name"
        })
        .then(response => console.log(response));

## PUT: /abilities/:name

### *Esta ruta require permisos elevados.* ###

Edita el nombre o descripcion de una habilidad.<br>
Recibe por **params** el nombre de una habilidad existente.<br>
Recibe por **body** dos parametros:

- **col** define el campo que sea desea modificar. Su valor puede ser "name" o "description".
- **value** sera el nuevo valor que tomara el campo definido en **col**.

        axios.put('https://mistborn-api-production.up.railway.app/abilities/Hemalurgy?apiKey=YOUR_API_KEY', {
                "col": "name",
                "value": "new name"
        })
        .then(response => console.log(response));

## PUT: /ethnicities/:name

### *Esta ruta require permisos elevados.* ###

Edita el nombre o descripcion de una etnia.<br>
Recibe por **params** el nombre de una etnia existente.<br>
Recibe por **body** dos parametros:

- **col** define el campo que sea desea modificar. Su valor puede ser "name" o "description".
- **value** sera el nuevo valor que tomara el campo definido en **col**.

        axios.put('https://mistborn-api-production.up.railway.app/ethnicities/Skaa?apiKey=YOUR_API_KEY', {
                "col": "name",
                "value": "new name"
        })
        .then(response => console.log(response));

## PUT: /groups/:name

### *Esta ruta require permisos elevados.* ###

Edita el nombre o descripcion de un grupo.<br>
Recibe por **params** el nombre de un grupo existente.<br>
Recibe por **body** dos parametros:

- **col** define el campo que sea desea modificar. Su valor puede ser "name" o "description".
- **value** sera el nuevo valor que tomara el campo definido en **col**.

        axios.put('https://mistborn-api-production.up.railway.app/groups/Keeper?apiKey=YOUR_API_KEY', {
                "col": "name",
                "value": "new name"
        })
        .then(response => console.log(response));

## DELETE: /characters/:id

### *Esta ruta require permisos elevados.* ###

Elimina un personaje.<br>
Recibe por **params** el id de un personaje.

        axios.delete('https://mistborn-api-production.up.railway.app/characters/1?apiKey=YOUR_API_KEY')
        .then(response => console.log(response));

## DELETE: /abilities/:id

### *Esta ruta require permisos elevados.* ###

Elimina una habilidad.<br>
Recibe por **params** el id de una habilidad.

        axios.delete('https://mistborn-api-production.up.railway.app/abilities/1?apiKey=YOUR_API_KEY')
        .then(response => console.log(response));

## DELETE: /ethnicities/:id

### *Esta ruta require permisos elevados.* ###

Elimina una etnia.<br>
Recibe por **params** el id de una etnia.

        axios.delete('https://mistborn-api-production.up.railway.app/ethnicities/1?apiKey=YOUR_API_KEY')
        .then(response => console.log(response));

## DELETE: /groups/:id

### *Esta ruta require permisos elevados.* ###

Elimina un grupo.<br>
Recibe por **params** el id de un grupo.

        axios.delete('https://mistborn-api-production.up.railway.app/groups/1?apiKey=YOUR_API_KEY')
        .then(response => console.log(response));

## DELETE: /characters/:name

### *Esta ruta require permisos elevados.* ###

Elimina un personaje.<br>
Recibe por **params** el nombre de un personaje.

        axios.delete('https://mistborn-api-production.up.railway.app/characters/Kelsier?apiKey=YOUR_API_KEY')
        .then(response => console.log(response));

## DELETE: /abilities/:name

### *Esta ruta require permisos elevados.* ###

Elimina una habilidad.<br>
Recibe por **params** el nombre de una habilidad.

        axios.delete('https://mistborn-api-production.up.railway.app/abilities/Hemalurgy?apiKey=YOUR_API_KEY')
        .then(response => console.log(response));

## DELETE: /ethnicities/:name

### *Esta ruta require permisos elevados.* ###

Elimina una etnia.<br>
Recibe por **params** el nombre de una etnia.

        axios.delete('https://mistborn-api-production.up.railway.app/ethnicities/Skaa?apiKey=YOUR_API_KEY')
        .then(response => console.log(response));

## DELETE: /groups/:name

### *Esta ruta require permisos elevados.* ###

Elimina un grupo.<br>
Recibe por **params** el nombre de un grupo.

        axios.delete('https://mistborn-api-production.up.railway.app/groups/Keeper?apiKey=YOUR_API_KEY')
        .then(response => console.log(response));

## POST: /characters

### *Esta ruta require permisos elevados.* ###

Crea un nuevo personaje.
Recibe por **body** 4 parametros:

- **name** debera contener el nombre del nuevo personaje.
- **description** debera contener una descripcion del nuevo personaje.
- **id_ethnicity** debera contener la id de la etnia relacionada al nuevo personaje.
- **state** debera contener el estado del nuevo personaje (dead, alive, unknown).

Adicionalmente puede recibir tres parametros opcionales:

- **id_abilities** debera ser un array de enteros, conteniendo las ids de las habilidades que el personaje posea.
- **id_groups** debera ser un array de enteros, conteniendo las ids de los grupos a los que el personaje pertenezca.
- **id_relations** debera ser un array de enteros, conteniendo las ids de los personajes relacionados a este.


        axios.post('https://mistborn-api-production.up.railway.app/characters?apiKey=YOUR_API_KEY', {
                "name": "new character name",
                "description": "new character description",
                "id_ethnicity": 1,
                "state": "alive",
                "id_abilities": [1, 2, 3],
                "id_groups": [1,2,3],
                "id_relations": [1,2,3]
        })
        .then(response => console.log(response));

## POST: /abilities

### *Esta ruta require permisos elevados.* ###

Crea una nueva habilidad.
Recibe por **body** dos parametros:

- **name** debera contener el nombre de la nueva habilidad.
- **description** debera contener una descripcion de la nueva habilidad.

        axios.post('https://mistborn-api-production.up.railway.app/abilities?apiKey=YOUR_API_KEY', {
                "name": "new ability name",
                "description": "new ability description"
        })
        .then(response => console.log(response));

## POST: /ethnicities

### *Esta ruta require permisos elevados.* ###

Crea una nueva etnia.
Recibe por **body** dos parametros:

- **name** debera contener el nombre de la nueva etnia.
- **description** debera contener una descripcion de la nueva etnia.

        axios.post('https://mistborn-api-production.up.railway.app/ethnicities?apiKey=YOUR_API_KEY', {
                "name": "new ethnicity name",
                "description": "new ethnicity description"
        })
        .then(response => console.log(response));

## POST: /groups

### *Esta ruta require permisos elevados.* ###

Crea un nuevo grupo.
Recibe por **body** dos parametros:

- **name** debera contener el nombre del nuevo grupo.
- **description** debera contener una descripcion del nuevo grupo.

        axios.post('https://mistborn-api-production.up.railway.app/groups?apiKey=YOUR_API_KEY', {
                "name": "new group name",
                "description": "new group description"
        })
        .then(response => console.log(response));
