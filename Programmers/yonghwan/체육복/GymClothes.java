package 체육복;

import java.util.HashSet;

public class GymClothes {

    public static int solution(int n, int[] lost, int[] reserve) {
        HashSet<Integer> reserves = new HashSet<>();
        HashSet<Integer> losts = new HashSet<>();

        for (int r : reserve) {
            reserves.add(r);
        }
        for (int l : lost) {
            losts.add(l);
        }

        HashSet<Integer> intersection = new HashSet<>(reserves);
        intersection.retainAll(losts);
        reserves.removeAll(intersection);
        losts.removeAll(intersection);

        for (int l : new HashSet<Integer>(losts)) {
            System.out.println("for " + l);
            if (reserves.contains(l - 1)) {
                losts.remove(l);
                reserves.remove(l - 1);
            } else if (reserves.contains(l + 1)) {
                losts.remove(l);
                reserves.remove(l + 1);
            }
        }

        return n - losts.size();
    }

    public static void main(String[] args) {
        int n = 6;
        int[] lost = {6, 5, 2, 4};
        int[] reserve = {3};
        int result = solution(n, lost, reserve);
        System.out.println(result);
    }
}
