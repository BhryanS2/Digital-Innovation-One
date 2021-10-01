/*
Digital innovation One
Polígonos Regulares Simples
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
#define ll long long
const int INF = 0x3f3f3f3f;

#define MAX 300

int main() {
    ll n, m;
    cin >> n >> m;
    // n = número de lados do polígono
    // m = cumprimento de cada lado do polígono
    ll res = n*m;
    cout << res << endl;
    return 0;
}


//g++ exe.cpp -o exe && exe < input.txt
