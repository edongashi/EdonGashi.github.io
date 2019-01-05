# Gjuhë Programuese - Java 13

---

**Detyrë:** Çfarë shfaqet kur të ekzekutohet ky kod?

```cpp
int f(int a) {
  return a + 5;
}

int main() {
  cout << "a = " << f(3) + 2 * f(2) << endl;
  cout << "b = " << f(f(2)) << endl;
  return 0;
}
```

--

```text
a = 22
b = 12
```

---


**Detyrë:** Çfarë shfaqet kur të ekzekutohet ky kod?

```cpp
int f(int x, int a) {
  return x + 3 * a;
}

int g(int a) {
  return a * 2;
}

int main() {
  cout << 2 * g(f(3, f(2, 1)) + 2);
  return 0;
}
```

--

```text
80
```

---

**Detyrë:** Çfarë shfaqet kur të ekzekutohet ky kod?

```cpp
int h(int x) {
  if (x < 1) {
    return 0;
  } else {
    return x + h(x - 1);
  }
}

int main() {
  cout << 2 * h(5);
  return 0;
}
```

--

```text
30
```

---

**Detyrë:** Të shkruhen dy funksione me emrin `max`. Njëri e gjen maksimumin e matricës ndërsa tjetri të vektorit.

--

```cpp
#include <iostream>
using namespace std;

#define N 3

int max(int v[], int n)
{
  int rez = v[0];
  for (int i = 0; i < n; i++)
  {
    if (v[i] > rez)
    {
      rez = v[i];
    }
  }

  return rez;
}

int max(int A[][N], int rr)
{
  int rez = A[0][0];
  for (int i = 0; i < rr; i++)
  {
    for (int j = 0; j < N; j++)
    {
      if (A[i][j] > rez)
      {
        rez = A[i][j];
      }
    }
  }

  return rez;
}

int main()
{
  int v[5] = {5, 3, 15, 2, 7};
  cout << "Maksimumi i v: " << max(v, 5) << endl;

  int M[N][N] = {
    {3, 1, 5},
    {7, 3, 9},
    {8, 0, -3}
  };

  cout << "Maksimumi i M: " << max(M, N) << endl;
  return 0;
}
```

---

**Detyrë:** Të deklarohet struktura `drejtkendesh(a,b)` e cila mban brinjët e drejtkëndëshit. Të shkruhen funksionet `int perimetri(drejtkendesh)`, `int siperfaqja(drejtkendesh)`, `double diagonalja(drejtkendesh)`, dhe `drejtkendesh rrotullo(drejtkendesh)` dhe funksione tjera në lidhje me drejtkëndëshin.

--

```cpp
#include <iostream>
#include <sstream>
#include <fstream>
#include <math.h>
#include <string>

using namespace std;

struct drejtkendeshi {
  int a;
  int b;
};

int perimetri(drejtkendeshi d) {
  return 2 * (d.a + d.b);
}

int siperfaqja(drejtkendeshi d) {
  return d.a * d.b;
}

double diagonalja(drejtkendeshi d) {
  return sqrt(pow(d.a, 2) + pow(d.b, 2));
}

drejtkendeshi rrotulluar(drejtkendeshi d) {
  drejtkendeshi rez;
  rez.a = d.b;
  rez.b = d.a;
  return rez;
}

void shfaq(drejtkendeshi d){
  cout << "(" << d.a << "," << d.b << ")" << endl;
}

string toString(drejtkendeshi d) {
  stringstream ss;
  ss << "(" << d.a << "," << d.b << ")";
  return ss.str();
}

bool identik(drejtkendeshi d1, drejtkendeshi d2) {
  if (d1.a == d2.a && d1.b == d2.b) {
    return true;
  } else {
    return false;
  }
}

bool ngjashem(drejtkendeshi d1, drejtkendeshi d2) {
  if (identik(d1, d2) || identik(d1, rrotulluar(d2))) {
    return true;
  } else {
    return false;
  }
}

int main() {
  drejtkendeshi d = { 4, 3 };
  cout << toString(d) << endl;
  cout << "Perimetri: " << perimetri(d) << endl;
  cout << "Siperfaqja: " << siperfaqja(d) << endl;
  cout << "Diagonalja: " << diagonalja(d) << endl;
  cout << toString(rrotulluar(d)) << endl;

  ofstream file;
  file.open("drejtkendeshi.txt");
  file << "Drejtkendeshi d: " << toString(d);
  file << endl;
  file << "Drejtkendeshi i rrotulluar: "
       << toString(rrotulluar(d))
       << endl;

  drejtkendeshi d2 = rrotulluar(d);
  cout << "d1 === d2? " << identik(d, d2) << endl;
  cout << "d1 <=> d2? " << ngjashem(d, d2) << endl;

  return 0;
}
```

---

**Detyrë:** Të deklarohet struktura `rezultati(piketShkrim, piketGoje)`. Të deklarohet struktura `notat` e cila mban 5 rezultate për lëndët e semestrit.

Pastaj të definohen funksionet `int nota(rezultati)`, `double notaMesatare(notat)`, `int provimeTeKaluara(notat)`.

--

```cpp
#include <iostream>
using namespace std;

struct rezultati {
  int piketMeShkrim;
  int piketMeGoje;
};

int nota(rezultati r) {
  if (r.piketMeShkrim < 50 || r.piketMeGoje < 50) {
    return 5;
  }

  int piket = (r.piketMeShkrim + r.piketMeGoje) / 2;
  if (piket >= 90) {
    return 10;
  } else if (piket >= 80) {
    return 9;
  } else if (piket >= 70) {
    return 8;
  } else if (piket >= 60) {
    return 7;
  } else if (piket >= 50) {
    return 6;
  } else {
    return 5;
  }
}

struct notat {
  rezultati matematike;
  rezultati fizike;
  rezultati baza;
  rezultati programim;
  rezultati zgjedhore;
};

double notaMesatare(notat n) {
  return (nota(n.matematike) 
        + nota(n.fizike)
        + nota(n.baza)
        + nota(n.programim)
        + nota(n.zgjedhore)) / 5.0;
}

int provimeTeKaluara(notat n) {
  int totali = 0;
  if (nota(n.baza) > 5) {
    totali++;
  }
  if (nota(n.matematike) > 5) {
    totali++;
  }
  if (nota(n.fizike) > 5) {
    totali++;
  }
  if (nota(n.programim) > 5) {
    totali++;
  }
  if (nota(n.zgjedhore) > 5) {
    totali++;
  }

  return totali;
}

int main() {
  rezultati r = { 35, 85 };
  cout << nota(r)
       << endl;

  notat studenti;
  studenti.matematike = {57, 65};
  studenti.fizike = {35, 48};
  studenti.baza = {72, 90};
  studenti.programim = {42, 58};
  studenti.zgjedhore = {95, 100};

  cout 
    << "Matematike me goje: " 
    << studenti.matematike.piketMeGoje
    << endl;

  cout << "Nota mesatare e studentit: "
       << notaMesatare(studenti)
       << endl;
       
  cout << "Studenti ka kaluar kaq provime: "
       << provimeTeKaluara(studenti)
       << endl;

  return 0;
}
```