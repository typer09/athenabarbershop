const fs = require('fs');
const path = require('path');

function replaceName(fileContent) {
    let result = fileContent;

    const replacements = [
        // "The Black Barbershop Da Nang"
        { regex: /The Black Barbershop Da Nang/g, replace: 'Athena Barber Shop Da Nang' },
        { regex: /THE BLACK BARBERSHOP DA NANG/g, replace: 'ATHENA BARBER SHOP DA NANG' },
        { regex: /the black barbershop da nang/g, replace: 'athena barber shop da nang' },

        // "The Black Barber Da Nang"
        { regex: /The Black Barber Da Nang/g, replace: 'Athena Barber Shop Da Nang' },
        { regex: /THE BLACK BARBER DA NANG/g, replace: 'ATHENA BARBER SHOP DA NANG' },
        { regex: /the black barber da nang/g, replace: 'athena barber shop da nang' },

        // "The Black Barbershop"
        { regex: /The Black Barbershop/g, replace: 'Athena Barber Shop' },
        { regex: /THE BLACK BARBERSHOP/g, replace: 'ATHENA BARBER SHOP' },
        { regex: /the black barbershop/g, replace: 'athena barber shop' },

        // "Black Barbershop Da Nang"
        { regex: /Black Barbershop Da Nang/g, replace: 'Athena Barber Shop Da Nang' },
        { regex: /BLACK BARBERSHOP DA NANG/g, replace: 'ATHENA BARBER SHOP DA NANG' },

        // "Black Barber Shop Da Nang"
        { regex: /Black Barber Shop Da Nang/g, replace: 'Athena Barber Shop Da Nang' },
        { regex: /black barber shop da nang/g, replace: 'athena barber shop da nang' },

        // "The Black Barber"
        { regex: /The Black Barber/g, replace: 'Athena Barber Shop' },
        { regex: /THE BLACK BARBER/g, replace: 'ATHENA BARBER SHOP' },
        { regex: /the black barber/g, replace: 'athena barber shop' },

        // "Black Barber"
        { regex: /Black Barber/g, replace: 'Athena Barber Shop' },
        { regex: /BLACK BARBER/g, replace: 'ATHENA BARBER SHOP' },
        { regex: /black barber/g, replace: 'athena barber shop' },

        // "BlackBarber"
        { regex: /BlackBarber/g, replace: 'AthenaBarberShop' },
        { regex: /BLACKBARBER/g, replace: 'ATHENABARBERSHOP' },
        { regex: /blackbarber/g, replace: 'athenabarbershop' }
    ];

    for (let { regex, replace } of replacements) {
        result = result.replace(regex, replace);
    }

    return result;
}

function processDirectory(dir) {
    const files = fs.readdirSync(dir);

    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            processDirectory(fullPath);
        } else if (/\.(ts|tsx|js|jsx|css|md|json)$/i.test(fullPath)) {
            const content = fs.readFileSync(fullPath, 'utf8');
            const newContent = replaceName(content);

            if (content !== newContent) {
                fs.writeFileSync(fullPath, newContent, 'utf8');
                console.log(`Updated ${fullPath}`);
            }
        }
    }
}

const targetDir = path.join(__dirname, 'src');
processDirectory(targetDir);
console.log('Done!');
