function compose(...aa) { 
    return aa.reduceRight((poprz, nas) => (...args) => nas(poprz(...args)),
    w => w);
}