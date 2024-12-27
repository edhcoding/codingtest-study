package jaden_case;

import java.util.Objects;

public class JadenCase {
    public static String solution(String s) {
        if(s == null || s.trim().isEmpty()) return "";

        String[] letters = s.split("");
        boolean firstLetter = true;
        StringBuilder result = new StringBuilder();

        for (String letter : letters) {
            if (firstLetter) {
                result.append(letter.toUpperCase());
            } else {
                result.append(letter.toLowerCase());
            }

            firstLetter = checkFistLetter(letter);
        }

        return result.toString();
    }

    private static boolean checkFistLetter(String letter){
        if(!Objects.equals(letter, " ")) return false;

        return true;
    }

    public static void main(String[] args) {
        String s = "3people unFollowed me";
        String result = solution(s);
        System.out.println(result);
    }
}
