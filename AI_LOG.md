
## Eina i model IA usats
- Eina: ChatGPT
- Model: GPT-5.4 Thinking

---

## Consulta 1
Pregunta: Com estructurar el backend seguint l’arquitectura existent del projecte?

Prompt: Vull implementar-ho seguint l’estructura del projecte i el seu estil de codi. Necessito model, service, controller i routes.

Incoherències
Cosa malament: `app.use('/planificacions', planificacioRoutes)` no encaixava, ja que no importo les rutes amb `app.use`.

Solució 
Es va adaptar la proposta al fitxer `server.ts` real del projecte, on les rutes es munten amb `router.use(...)` i no amb `app.use(...)`.

---

## Consulta 2

Pregunta: 
Com fer el llistat paginat i amb cercador al backend?

Prompt:  Necessito que el CRUD tingui llistat amb paginació i buscador, seguint el patró del projecte.

Incoherències
La primera proposta només cobria la cerca pel títol de la planificació i no altres camps relacionats.

Solució
Es va mantenir una versió simple i funcional amb `page`, `limit` i `search` sobre el camp `title`, perquè encaixava millor amb el nivell actual del projecte i complia els requisits.

---

## Consulta 3

Pregunta:  Com provar els endpoints nous del backend i verificar que funcionen?

Prompt: Digue’m com provar els endpoints de `planificacions` i què he de fer si no apareixen o si dona error.

Incoherències:
Algunes indicacions inicials assumien que el servidor s’executava directament des de `src`, però el projecte arrenca des de `build`.

Solució:
Es va revisar el `package.json` i es va compilar correctament amb l’script corresponent abans d’arrencar el servidor. També es va comprovar la ruta compilada dins de `build`.