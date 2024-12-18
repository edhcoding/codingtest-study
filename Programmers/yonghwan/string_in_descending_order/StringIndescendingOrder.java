import java.util.ArrayList;
import java.util.Collections;

//문자열 내림차순으로 배치하기
public class StringIndescendingOrder {
    public static void solution(String s) {
        ArrayList<Integer> sNum = new ArrayList<>();
        StringBuilder result = new StringBuilder();
        for(int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            System.out.println(c + " " + (int) c);
            sNum.add((int) c);
        }

        Collections.sort(sNum);

        for(int i = sNum.size()-1; i >= 0; i--) {
            result.append((char) ((int)sNum.get(i)));
        }
    }
    public static void main(String[] args) {
        String s ="Zbcdefg";
        solution(s);
        System.out.println();
    }
}
