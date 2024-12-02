public class CaesarCipher {
    public static String solveProblem(String s, int n) {
        char[] characters = s.toCharArray();
        String newWord = "";
        for(char c : characters){
            if(c + n > 122 && c <= 122) {
                newWord += (char)(c + n + (97 - 123));
            } else if (c <= 90 && c + n > 90) {
                newWord += (char)(c + n + (65 - 91));
            } else if (c > 122 || c < 65) {
                newWord += c;
            } else {
                newWord += (char)(c + n);
            }
        }
        return newWord;
    }
}
