# Gjuhë Programuese - Java 12

---

## Përsëritje

---

**Detyrë:** Çfarë shfaqet kur ekzekutohet ky kod?

```cpp
#include <iostream>

void f(int a) {
  a = a - 1;
}
int main() {
  int a = 8;
  f(a);
  std::cout << a;
}
```

---

**Detyrë:** Çfarë shfaqet kur ekzekutohet ky kod?

```cpp
#include <iostream>

int f1(int a) {
  a = a + 5;
  return 7;
}
int f2(int c) {
  return c - 1;
}
int main() {
  int a = 3;
  int c = f1(a);
  std::cout << f2(c);
}
```

---

**Detyrë:** Çfarë shfaqet kur ekzekutohet ky kod?

```cpp
#include <iostream>

int f(int x) {
  return 2 * x;
}
int g(int x) {
  return x + 3;
}
int main() {
  std::cout << f(g(3));
}
```

---

**Detyrë:** Çfarë shfaqet kur ekzekutohet ky kod?

```cpp
#include <iostream>

int f(int x) {
  return x + 3;
}
double f(double x) {
  return 2 * x;
}
int main() {
  std::cout << f((double)f(7));
}
```

---

**Detyrë:** Çfarë shfaqet kur ekzekutohet ky kod?

```cpp
#include <iostream>
#define A 3

int f(int a) {
  a = a + A;
  return A + a;
}
int main() {
  int a = A;
  std::cout << f(a * A);
}
```

---

## Numërimet

Numërim quajmë një bashkësi të vlerave.

---

Marrim ngjyrat e semaforit: kuqe, verdhë, gjelbër.

Në program këtë e paraqitshim duke ia shoqëruar ngjyrës nga një vlerë numerike:

Ngjyra|Kodi
-|-
Kuqe|0
Verdhë|1
Gjelbër|2

---

**Numërim** quajmë tipin që merr vlera nga një bashkësi diskrete.

$$
\text{Ngjyrat}= \lbrace \textit{Kuqe}, \textit{Verdhe}, \textit{Gjelber} \rbrace
$$

Prapa skenave vlerave iu shoqërohen shifra.

---

Numërimet i kemi realizuar përmes `#define`:

```cpp
#define KUQE 0
#define VERDHE 1
#define GJELBER 2

...

int ngjyra = KUQE;
if (ngjyra == GJELBER) {
  ...
}
```

---

Ekziston edhe mundësia me `enum`:

```cpp
enum Ngjyra {
  kuqe,
  verdhe,
  gjelber
};

...

Ngjyra n = kuqe;
if (n == gjelber) {
  ...
}
```

---

Përmes `enum` krijojmë tip të vërtetë, ndërkaq me `#define` bëjmë zëvendësime paraprocesorike.

Kur kemi nevojë ta ruajmë një `Ngjyra`, e deklarojmë variablen e tipit `Ngjyra`:

```cpp
Ngjyra x = kuqe;
```

---

Kompajlleri anëtarëve iu cakton vlera rendore $0, 1, 2, \dots$

Nëse kemi nevojë t'iu japim anëtarëve vlera tjera, i cekim manualisht:

```cpp
enum Ngjyra {
  kuqe = 10,
  verdhe = 20,
  gjelber = 30
};
```

---

Sa e ka vlerën `gjelber` në këtë rast?

```cpp
enum Ngjyra {
  kuqe = 10,
  verdhe = 20,
  gjelber
};
```

---

Kur nuk ceket vlera, anëtari e merr vlerën e ardhshme të lirë pas anëtarit të kaluar.

Kështu që `gjelber = 21`

---

**Shembull:** Rajonet e targave të Kosovës.

```cpp
enum Rajoni {
  Prishtine = 1,
  Mitrovice = 2,
  Peje      = 3,
  Prizren   = 4,
  Ferizaj   = 5,
  Gjilan    = 6,
  Gjakove   = 7
};
```

---

```cpp
void shfaqRajonin(Rajoni r) {
  switch (r) {
    case Prishtine: cout << "Rajoni i Prishtines"; break;
    case Mitrovice: cout << "Rajoni i Mitrovices"; break;
    case Peje:      cout << "Rajoni i Pejes";      break;
    ...
  }
}

...

shfaqRajonin(Peje);
```

---

**Shembull:** Niveli i studimeve:

```cpp
enum NiveliStudimeve {
  Fillore,
  Mesme,
  Bachelor,
  Master,
  Doktorature
};
```

---

**Shembull:** Drejtimet gjeografike:

```cpp
enum Drejtimi {
  Veri,
  VeriLindje,
  Lindje,
  JugLindje,
  Jug,
  JugPerendim,
  Perendim,
  VeriPerendim
};
```

---

**Detyrë:**

1. Të deklarohet numërimi `Muaji` i cili ka vlerat $\text{janar} = 1, \text{shkurt} = 2, \dots$
2. Të deklarohet numërimi `Stina` e cila ka vlerat $\text{pranvere}, \text{vere}, \text{vjeshte}, \text{dimer}$
3. Të shkruhet funksioni `merrStinen` i cili pranon një `Muaji` dhe kthen `Stina` e atij muajit.
4. Të shkruhet funksioni `shfaqStinen` i cili pranon një `Stina` dhe e shfaq në ekran. 
5. Të thirren funksionet me $m=\text{prill}$

---

## Strukturat

Struktura është një grupim logjik i variablave.

---

Supozojmë që duhet ta plotësojmë një formular:

Fusha|Vlera
-|-
Emri|Filan
Mbiemri|Fisteku
Mosha|22
Jeni student?|Po

---

Këto fusha paraqesin grupimin logjik për të dhënat personale të një `Personi`.

---

Secila fushë e këtij grupimi ka një tip të të dhënave:

Fusha|Tipi
-|-
Emri|string
Mbiemri|string
Mosha|int
Jeni student?|bool

---

Në C++ ky grup i të dhënave modelohet kështu:

```cpp
struct Personi {
  string Emri;
  string Mbiemri;
  int Mosha;
  bool Student;
};
```

---

Kur kemi nevojë të ruajmë të dhënat e një `Personi`, e deklarojmë një variabël të këtij tipi:

```cpp
Personi p;
p.Emri = "Filan";
p.Mbiemri = "Fisteku";
p.Mosha = 22;
p.Student = true;
```

---

Ekziston një formë e shkurtë për inicializimin e strukturës:

```cpp
Personi p = {
  "Filan",
  "Fisteku",
  22,
  true
}
```

---

Strukturat përdorën kur kemi nevojë ta dërgojmë ose ta kthejmë një grup logjik të të dhënave në vend se vetëm një tip të thjeshtë (int, bool, etj.).

---

**Shembull:** Struktura `Data` është grupim logjik i `Viti`, `Muaji`, `Dita`:

```cpp
struct Data {
  int Dita;
  int Muaji;
  int Viti;
};

int main() {
  Data pavaresise = { 17, 2, 2008 };
}
```

---

Kur themi `Data d` nuk bëhet për ndonjë tip të thjeshtë si psh. `int` ose `double`, por për grupimin e tre numrave të plotë (`Dita`, `Muaji`, `Viti`):

Dita|Muaji|Viti
:-:|:-:|:-:
17|02|2008

---

Funksionet mund t'i përdorin tipet tona:

```cpp
Data sot() {
  Data d = { ... };
  return d;
}

void shtyp(Data d) {
  cout << d.Dita << "/" << d.Muaji << "/" << d.Viti;
}

int main() {
  shtyp(sot());
}
```

---

**Detyrë:** Të deklarohet struktura `Rezultati` me fushat `PiketShkrim`, `PiketGoje`. Të deklarohet një variabël e këtij tipi dhe të mbushet nga tastiera. Pastaj të tregohet a kalohet provimi me ato pikë.

---

**Detyrë:** Të deklarohet struktura `Rezultati` sikur në detyrën e kaluar, por secili hap i kërkuar nga detyra të realizohet me nga një funksion.

---

**Detyrë:** Të deklarohet struktura `Data`. 

1. Të shkruhet funksioni `konstrukto(viti, muaji, dita)` i cili krijon datën nga parametrat e dhënë.
2. Të shkruhet funksioni `shtyp(d)` i cili shfaq datën.
3. Të shkruhen funksionet `dita(d)`, `muaji(d)` dhe `viti(d)` të cilat nxerrin shënimet nga data.
4. Të krijohet data me vlerat e sotit dhe të thirren funksionet e krijuara.

---

Ndonjëherë kemi:

1. Një strukturë të të dhënave.
2. Një funksion `konstrukto` që krijon atë strukturë.
3. Funksione tjera që veprojnë mbi atë strukturë.

Bashkësia e këtyre tri elementeve quhet **klasë**.