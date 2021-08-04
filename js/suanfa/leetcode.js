/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: Yukun
 * @Date: 2021-08-04 09:06:48
 * @LastEditors: Yukun
 * @LastEditTime: 2021-08-04 13:00:10
 */
//  二叉树

const data = {
    name: 'a',
    left: {
        name: 'b',
        left: {
            name: 'd',
            left: {
                name: 'f'
            },
            right: {
                name: 'g',
                left: {
                    name: 'h'
                },
                right: {
                    name: 'i'
                }
            }
        },
        right: {
            name: 'e'
        }
    },
    right: {
        name: 'c'
    }
}

// 先序
// var Traversal = function (root) {
//     const stack = []
//     const res = []
//     while (root || stack.length) {
//         while (root) {
//             stack.push(root)
//             res.push(root.name)
//             root = root.left
//         }
//         root = stack.pop()
//         root = root.right
//     }
//     return res
// };


// 中序
// var Traversal = function (root) {
//     const stack = []
//     const res = []
//     while (root || stack.length) {
//         while (root) {
//             stack.push(root)
//             root = root.left
//         }
//         root = stack.pop()
//         res.push(root.name)
//         root = root.right
//     }
//     return res
// };

// 后序
var Traversal = function (root) {
    const stack = []
    const res = []
    while (root || stack.length) {

        while (root) {
            stack.push(root)
            res.unshift(root.name)
            root = root.right
        }
        root = stack.pop()
        root = root.left

    }
    return res
}

console.log(Traversal(data))