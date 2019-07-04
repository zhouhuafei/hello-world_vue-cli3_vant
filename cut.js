const vfs = require('vinyl-fs'); // 我从gulp包的依赖中找到的这个包
const del = require('del');

const envDirBakOrMoveOrDel = process.argv[2] || ''; // 是备份还是移动或者是删除？
const envDirTarget = process.argv[3] || ''; // 备份或移动到哪里或者是删除哪个目录？

if (envDirBakOrMoveOrDel && envDirTarget) {
    if (envDirBakOrMoveOrDel === 'bak') { // 备份
        vfs.src(['./dist/**/**'])
            .pipe(vfs.dest(`./dist-bak/${envDirTarget}`));
    }
    if (envDirBakOrMoveOrDel === 'move') { // 移动
        vfs.src(['./dist-bak/**/**'])
            .pipe(vfs.dest('./dist/'));
    }
    if (envDirBakOrMoveOrDel === 'del') { // 删除
        del.sync(['./dist-bak/']);
    }
}
