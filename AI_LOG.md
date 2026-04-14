## Eina i model IA usats
- Eina: ChatGPT
- Model: GPT-5.4 Thinking

---
## Consulta 1

Pregunta:
Com afegir paginació i cerca per títol al llistat de `planificacions`?

Prompt:
Necessito que el llistat de `planificacions` admeti `page`, `limit` i una cerca simple pel camp `title`.

Incoherències:
La primera proposta plantejava una cerca massa oberta i no s’ajustava del tot al que necessitava en aquest punt del projecte.

Solució:
Vaig revisar i ajustar manualment la lògica del llistat perquè la paginació amb `page` i `limit` funcionés correctament, i vaig deixar la cerca sobre `title`, que era la més adequada per als requisits actuals.

---
## Consulta 2

Pregunta:
Com provar els endpoints nous del backend i verificar que funcionen?

Prompt:
Digue’m com provar els endpoints de `planificacions` i què he de fer si no apareixen o si dona error.

Incoherències:
Algunes indicacions inicials assumien que el servidor s’executava directament des de `src`, però el projecte arrenca des de `build`.

Solució:
Es va revisar el `package.json` i es va compilar correctament amb l’script corresponent abans d’arrencar el servidor. També es va comprovar la ruta compilada dins de `build`.

---

## Consulta 3

Pregunta:
Com adaptar el model de `Planificacio` al format real de dades del projecte?

Prompt:
Necessito definir el model de `Planificacio` perquè sigui compatible amb l’estructura real de dades del backend i amb les relacions necessàries.

Incoherències:
La proposta inicial incloïa una definició massa genèrica i alguns camps no coincidien exactament amb els que convenia utilitzar al projecte.

Solució:
Es va revisar i ajustar manualment el model perquè els camps i l’estructura encaixessin amb la resta d’entitats del projecte i amb les necessitats reals del CRUD.

---

## Consulta 4

Pregunta:
Com gestionar els errors bàsics del CRUD de `planificacions` al backend?

Prompt:
Vull controlar millor els errors quan es crea, edita, consulta o elimina una planificació al backend.

Incoherències:
La primera proposta se centrava en el funcionament principal dels endpoints, però no detallava prou la resposta en casos d’error.

Solució:
Es van afegir comprovacions i respostes més clares per als casos en què una planificació no existia o quan es produïa algun error en la petició.

---

## Consulta 5
**Pregunta**  
Com fer el fitxer resumint l'ús de IA?

**Prompt**  
Resumeix tot el que he consultat en aquest xat en un format de fitxer .md especificant la meva pregunta, prompt i el que he indicat que estava malament. 

**Incoherències**  

**Solució**  
He afegit l'apartat de solució a cada consulta per especifícar el que he hagut de canviar.