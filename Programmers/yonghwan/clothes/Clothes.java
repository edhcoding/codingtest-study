package clothes;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map.Entry;

public class Clothes {
    static List<List<String>> result = new ArrayList<>();
    static List<String> temp = new ArrayList<>();

    public static void main(String[] args) {
        String[][] clothes = {{"yellow_hat", "headgear"}, {"blue_sunglasses", "eyewear"}, {"green_turban", "headgear"}};
        int result = solution(clothes);
    }
    public static int solution(String[][] clothes){
        HashMap<String, List<String>> map = new HashMap<>();
        int comboCount = 0;
        int clothCount = clothes.length;

        for(String[] cloth : clothes) {
            ArrayList<String> item = new ArrayList<>();
            item.add(cloth[0]);
            if(map.containsKey(cloth[1])){
                item.addAll(map.get(cloth[1]));
            }
            map.put(cloth[1], item);
            comboCount++;
        }

        dfs(map.keySet().toArray(new String[0]), 0, map);
        return 0;
    }

    private static void dfs(String[] types, int index, HashMap<String, List<String>> map) {
        if (index == types.length) {
            if (!temp.isEmpty()) {
                result.add(new ArrayList<>(temp));
            }
            return;
        }

        // 선택하지 않는 경우
        dfs(types, index + 1, map);

        // 선택하는 경우
        List<String> items = map.get(types[index]);
        for (String item : items) {
            temp.add(item);
            System.out.println(temp);
            dfs(types, index + 1, map);
            temp.remove(temp.size() - 1);
        }

    }
}
