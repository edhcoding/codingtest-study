package three_sum;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

// 3중 forloop을 사용하는 brute force
// DFS를 사용하기
public class ThreeSum {

    public static List<List<Integer>> solution(int[] nums){
        List<List<Integer>> result = new ArrayList<>();
        HashMap<Integer, Integer> map = new HashMap<>();
        for(int i = 0; i < nums.length; i++){
            map.put(i, nums[i]);
        }

        for(int i = 0; i < nums.length-1; i++){
            for(int j = i+1; j < nums.length; j++){
                int needs = -(nums[i] + nums[j]);
                if(map.containsValue(needs)){
                    ArrayList<Integer> arr = new ArrayList<>();
                    arr.add(nums[i]);
                    arr.add(nums[j]);
                    arr.add(needs);
                    arr.sort(Integer::compareTo);
                    if(!result.contains(arr)){
                        result.add(arr);
                    }
                }
            }
        }
        System.out.println(result);
        return result;
    }

    public static void main(String[] args) {
        int[] nums = {0,0,0};
//        solution(nums);
        List<List<Integer>> result = solution(nums);
    }
}
