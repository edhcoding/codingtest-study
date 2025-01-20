package 구명보트;

import java.util.Arrays;

public class LifeBoat {

    public static int solution(int[] people, int limit) {
        int count = 0;
        int right = people.length - 1;
        int left = 0;

        Arrays.sort(people);

        while(left <= right) {
            if(people[right] + people[left] <= limit) {
                left++;
            }
            right--;
            count++;
        }

        return count;
    }

    public static void main(String[] args) {
        int[] people = {70, 50, 80, 50};
        int limit = 100;
        int result = solution(people, limit);
        System.out.println(result);
    }
}
