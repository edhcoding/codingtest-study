package 조이스틱;

public class Joystick {
    public static int solution(String name) {
        int n = name.length();
        int count = 0;
        for(int i = 0; i < name.length(); i++) {
            char c = name.charAt(i);
            int curr = Math.min('Z' - c + 1, c - 'A');

            count += curr;
        }

        int minMove = n - 1;
        for(int i = 0; i < n; i++) {
            int next = i + 1;
            while(next < n && name.charAt(next) == 'A') {
                next++;
            }
            minMove = Math.min(minMove, i + n - next + Math.min(i, n - next));
            System.out.println(minMove);
        }

        return count + minMove;
    }

    public static void main(String[] args) {
        String name = "JBAAAAZZZZZ";
        int result = solution(name);
        System.out.println(result);
    }
}

