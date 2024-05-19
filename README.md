Teszt email: tesztelek@tesztelek.com
Tesz jelszó: tesztelek

Regisztrációnál 6 karakternél hosszabb jelszót kell megadni különben a firebase auth nem fogja engedni a regisztrációt.

Fordítási hiba nincs:
 - nálam nem volt, kérlek keress meg ha nálad igen
   
Futtatási hiba nincs
- nálam nem volt, kérlek keress meg ha nálad igen

Firebase Hosting URL (létezik, és minden végpont megfelelő módon betöltődik):
- https://vizora-f3996.web.app
- végpontok: /home,/login,/register,/list,/add (az authquard miatt nem fogod elérni a /list, /add csak ha bejelentkezel)

Adatmodell definiálása (legalább 4 TypeScript interfész vagy class formájában (ugyanennyi kollekció))
- src/app/shared/model/user.interface.ts
- src/app/shared/model/WaterMeter.class.ts

Alkalmazás felbontása megfelelő számú komponensre (egyetlen komponens TS és HTML kódja sem haladja meg a 250 sort és soronként a 400 karaktert)
- nem haladja meg

Reszponzív, mobile-first felület (minden adat látható és jól jelenik meg böngészőben is, mobil nézetben is)
- nálam működött

Legalább 2 különböző attribútum direktíva használata
- src/app/pages/list/list.component.html:8
- src/app/pages/login/login.component.html:15

Legalább 2 különböző strukturális direktíva használata
- *ngIf src/app/shared/navigationbar/navigationbar.component.html:3
- *ngFor src/app/pages/list/list.component.html:6

Adatátadás szülő és gyermek komponensek között (legalább 1 @Input és 1 @Output)
- @Input src/app/shared/details/details.component.ts:17
- @Output src/app/shared/details/details.component.ts:18

Legalább 10 különböző Material elem helyes használata.
- mat-button: src/app/shared/navigationbar/navigationbar.component.html:20
- mat-flat-button: src/app/pages/add/add.component.html:31
- mat-raised-button: src/app/shared/details/details.component.html:29
- mat-stroked-button: src/app/shared/details/details.component.html:33
- mat-list: src/app/pages/list/list.component.html:4
- mat-list-item: src/app/pages/list/list.component.html:5
- matInput: src/app/pages/add/add.component.html:27
- matTextarea: src/app/pages/add/add.component.html:10
- matSnackBar: src/app/pages/register/register.component.ts:20
  
Adatbevitel Angular form-ok segítségével megvalósítva (legalább 2)
- src/app/pages/login/login.component.html:15
- src/app/pages/register/register.component.html:13

Legalább 1 saját Pipe osztály írása és használata
- A megírt osztály: src/app/shared/Pipes
- A használata: src/app/pages/list/list.component.html:11

Legalább 2 különböző Lifecycle Hook használata a teljes projektben (értelmes tartalommal, nem üresen)
- src/app/shared/navigationbar/navigationbar.component.ts:46 
- src/app/shared/navigationbar/navigationbar.component.ts:32 

CRUD műveletek mindegyike megvalósult (Promise, Observable használattal)
- Create: src/app/shared/services/auth.service.ts:21
- Read: src/app/shared/services/WaterMeter.service.ts:19
- Update:src/app/shared/services/WaterMeter.service.ts:27
- Delete:src/app/shared/services/WaterMeter.service.ts:31

CRUD műveletek service-ekbe vannak kiszervezve és megfelelő módon injektálva lettek
- src/app/shared/services/auth.service.ts
- src/app/shared/services/WaterMeter.service.ts

Firestore adatbázis használata az adatokhoz (integráció, környezeti változók használata helyes legyen)
- src/app/app.module.ts:24

Legalább 2 komplex Firestore lekérdezés megvalósítása (ide tartoznak: where feltétel, rendezés, léptetés, limitálás)
- nincs

Legalább 4 különböző route a különböző oldalak eléréséhez
- src/app/app.routes.ts
- A routeolt oldalak: register, login, home, add, list

Legalább 2 route levédése azonosítással (AuthGuard) (ahol ennek értelme van, pl.: egy fórum témakör megtekinthető bárki számára, de a regisztrált felhasználó adatai nem)
- A list és az add oldal csak bejelentkezett felhasználók érhetik el:
      - src/app/pages/list/list.component.ts:33
      - src/app/pages/add/add.component.ts:20

Szubjektív pontozás a projekt egészére vonatkozólag (mennyire fedi le a projekt a témakört (mennyire kapcsolódik hozzá), mennyi lehet a befektetett energia a projektben)
- pls a minimum pont legyen meg 
Discord: szedis
