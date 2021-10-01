#include <bits/stdc++.h>
using namespace std;

typedef pair<int, int> PII;

#define REP(i,n) for (int i=0; i<(n); ++i)
#define FOR(var,pocz,koniec) for (int var=(pocz); var<=(koniec); ++var)
#define FORD(var,pocz,koniec) for (int var=(pocz); var>=(koniec); --var)
#define PB push_back
#define MP(a,b) make_pair(a,b)
#define F first
#define S second
const int INF = 0x3f3f3f3f;

#define MAX 300

/*
Lembre que, 
se o salário for R$ 3002.00, 
a taxa que incide é de 8% apenas sobre R$ 1000.00, 
pois a faixa de salário que fica de R$ 0.00 até R$ 2000.00 é isenta de Imposto de Renda. 

No exemplo fornecido (abaixo), a taxa é de 8% sobre R$ 1000.00 + 18% sobre R$ 2.00, o que resulta em R$ 80.36 no total. O valor deve ser impresso com duas casas decimais.
*/

double imposto(double valor) {
  double imposto = 0;
  double montante;
  double salario = valor;

    if (salario > 4500.00) {
      montante = salario - 4500.00;
      imposto = (montante * 0.28) + 350;
    } else if (salario > 3000.00) {
      montante = salario - 3000.00;
      imposto += (montante * 0.18) + 80;
    } else if (salario > 2000.00) {
      montante = salario - 2000.00;
      imposto += (montante * 0.08);
    }
    
    return imposto;
}

int main() {
    double salario;
    while(cin >> salario) {
        if (salario == 0) break;
        double impostoRes = imposto(salario);
        if(impostoRes == 0) cout << "Isento" << endl;
        else cout << fixed << setprecision(2) << impostoRes << endl;
    }
    return 0;
}


//g++ exe.cpp -o exe && exe < input.txt