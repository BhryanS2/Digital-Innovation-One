/*
Digital innovation One
Fases da Lua
*/
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

int main() {
    /*
    se entre 0 e 2 = lua nova
    se entre 3 e 96 = lua crescente
    se entre 97 e 100 = lua cheia
    se entre 96 e 3 = lua minguante
    */
    int inicio, finals;
    if (inicio >= 0 && finals <= 2) cout << "nova" << endl;
    else if (inicio < finals && finals <= 96) cout << "crescente" << endl;
    else if (inicio >= 97 || finals >= 97) cout << "cheia" << endl;
    else cout << "minguante" << endl;
    return 0;
}


//g++ exe.cpp -o exe && exe < input.txt
