package 영어_끝말잇기;

import java.util.Arrays;
import java.util.HashSet;

public class words_train {
    public static int[] solution(int n, String[] words) {
        HashSet<String> set = new HashSet<>();
        int[] answer = new int[2];
        int number = 1;
        int cycle = 1;
        char lastLetter = words[0].charAt(0);
        for(int i = 0; i < words.length; i++) {
            char firstLetter = words[i].charAt(0);
            if(firstLetter != lastLetter) {
                answer[0] = number;
                answer[1] = cycle;
                break;
            }
            if(set.contains(words[i])){
                answer[0] = number;
                answer[1] = cycle;
                break;
            }
            set.add(words[i]);
            if(number >= n) {
                number = 1;
                cycle++;
            } else {
                number++;
            }
            lastLetter = words[i].charAt(words[i].length() -1 );
        }

        return answer;
    }
    public static void main(String[] args) {
        int n = 2;
        String[] words = {"hello", "one", "even", "never", "now", "world", "draw"};
        int[] result = solution(n, words);
        System.out.println(Arrays.toString(result));
    }
}
