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
    int a, b;

    while (cin >> a >> b) {
        if (a == 0 && b == 0) break;
        int q = (a / b);
        int r = a - b * q;
        if (r < 0) {
            r += abs(b);
            q = (a - r) / b;
        }

        cout << q << " " << r << endl;
    }
    return 0;
}


//g++ exe.cpp -o exe && exe < input.txt
