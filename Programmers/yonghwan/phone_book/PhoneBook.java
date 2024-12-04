import java.util.HashSet;

public class PhoneBook {

    public static boolean solution(String[] phone_book) {
        HashSet<String> set = new HashSet<>();

        for (String phone : phone_book) {
            set.add(phone);
        }

        for (String phone : phone_book) {
            for (int i = 1; i < phone.length(); i++) {
                String prefix = phone.substring(0, i); // 접두어 생성
                if (set.contains(prefix)) {
                    return false;
                }
            }
        }

        return true;
    }

    public static void main(String[] args) {
        String[] phone_book = {"119", "97674223", "1195524421"};
        boolean result = solution(phone_book);
        System.out.println(result);
    }
}