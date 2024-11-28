public class Cola {
    static int newColaCount = 0;

    public static int solveProblem(int a, int b, int n) {
        int newCola = n / a * b;
        int emptyBottle = n % a + n / a * b;

        newColaCount += newCola;

        if(n / a > 0){
            solveProblem(a, b, emptyBottle);
        }
        return newColaCount;
    }
}
