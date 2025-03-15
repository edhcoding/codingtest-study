package 개인정보_수집_유효기간;

import java.text.ParseException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.*;

/**
 * packageName    : 개인정보_수집_유효기간
 * fileName       : 개인정보_수집_유효기간
 * author         : yong
 * date           : 3/15/25
 * description    :
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 3/15/25        yong       최초 생성
 */
public class 개인정보_수집_유효기간 {
    public static void main(String[] args) throws ParseException {
        String today = "2022.05.19";
        String[] privacies = new String[]{
                "2021.05.02 A",
                "2021.07.01 B",
                "2022.02.19 C",
                "2022.02.20 C"
        };

        String[] terms = new String[]{
                "A 6",
                "B 12",
                "C 3"
        };

        int[] result = solution(today, terms, privacies);
        System.out.println(Arrays.toString(result));
    }

    public static int[] solution(String today, String[] terms, String[] privacies) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy.MM.dd");
        LocalDate dateToday = LocalDate.parse(today, formatter);

        Map<String, Integer> termsMap = new HashMap<>();
        for (int i = 0; i < terms.length; i++) {
            String[] termInfo = terms[i].split(" ");
            termsMap.put(termInfo[0], Integer.valueOf(termInfo[1]));
        }

        List<Integer> result = new ArrayList<>();
        for (int i = 0; i < privacies.length; i++) {
            String[] privacyInfo = privacies[i].split(" ");
            LocalDate startDate = LocalDate.parse(privacyInfo[0], formatter);
            int term = termsMap.get(privacyInfo[1]);

            if (!dateToday.isBefore(startDate.plusMonths(term))) {
                result.add(i + 1);
            }
        }

        System.out.println(result);
        return result.stream().mapToInt(Integer::intValue).toArray();

    }
}
