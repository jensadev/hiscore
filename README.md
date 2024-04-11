# Exempel för kommunikation med API

Du hittar en enkel server som lyssnar på :3000 i mappen server.
Ladda ned, kör `npm install` på båda mapparna.

Starta servern i server mappen, `npm run dev`.

Dra igång frontend-biten i mappen `npm run dev`.
Surfa och testa, kolla i konsollen.

## Anpassa

Du kan typ använda servern rakt av, men den behöver prata med databasen, så den koden behöver skapas och `.env`osv. **Kom ihåg .gitignore**
Ska du köra det live sen, då behöver den hostas på en tjänst som [glitch](https://glitch.com).

Du behöver redigera ditt spel, du har grunderna i vad som behöver ske i filen [apitest](./apitest.js), så det handlar om att kalla på funktionerna när något sker och sen hantera svar.


