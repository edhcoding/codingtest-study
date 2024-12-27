package skill_tree;

import java.util.LinkedList;
import java.util.Queue;


public class SkillTree {

    // HashMap으로 선행이 뭔지 선언
    // 나누었을 때 스킬 배울 순서가 불가능한지 확인
    // 인덱스
    public static int solution(String skill, String[] skill_trees) {
        int count = 0;

        for (String skill_tree : skill_trees) {
            if (isSkillTreeValid(skill, skill_tree)) {
                count++;
            }
        }

        return count;
    }

    private static boolean isSkillTreeValid(String skill, String skill_tree) {
        Queue<Character> queue = new LinkedList<>();

        for (char c : skill.toCharArray()) {
            queue.offer(c);
        }

        for (char c : skill_tree.toCharArray()) {
            if (queue.contains(c)) {
                if (queue.poll() != c) {
                    return false;
                }
            }
        }

        return true;
    }

    public static void main(String[] args) {
        String skill = "CBD";
        String[] skill_trees = {"BACDE", "CBADF", "AECB", "BDA"};
        int result = solution(skill, skill_trees);
        System.out.println(result);
    }
}
