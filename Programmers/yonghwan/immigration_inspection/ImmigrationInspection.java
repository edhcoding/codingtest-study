package binary_search.immigration_inspection;

public class Immigration {
    public static long solution(int n, int[] times) {
        long start = 0;
        long end = 1000000000L;
        while(start < end) {
            long c = (end + start) / 2;

            if(isValid(c, n, times)) {
                end = c;
            } else {
                start = c + 1;
            }
        }
        return start;
    }
    private static boolean isValid(long c, int n, int[] times){
        long num = 0;
        for(int time : times){
            num += c / time;
        }
        return num >= n;
    }

    public static void main(String[] args){
        int[] times = {7, 10};
        long result = solution(6, times);
        System.out.println(result);
    }
}
