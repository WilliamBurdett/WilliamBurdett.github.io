const all_skills = [
    {
        "class_name": "Soldier",
        "class_skills": [
            {
                "name": "Blade Arc",
                "skills": [
                    {"name": "Laceration", "default": false}
                ],
                "default": false,
                "type": "active-damage"
            },
            {
                "name": "Blitz",
                "skills": [
                    {"name": "Blindside", "default": false}
                ],
                "default": false,
                "type": "active-damage"
            },
            {
                "name": "Cadence",
                "skills": [
                    {"name": "Fighting Form", "default": false},
                    {"name": "Deadly Momentum", "default": false}
                ],
                "default": false,
                "type": "active-damage"
            },
            {
                "name": "Forcewave",
                "skills": [
                    {"name": "Rending Force", "default": false},
                    {"name": "Internal Trauma", "default": false}
                ],
                "default": false,
                "type": "active-damage"
            },
            {
                "name": "Overguard",
                "skills": [],
                "default": false,
                "type": "active-damage"
            },
            {
                "name": "War Cry",
                "skills": [
                    {"name": "Break Morale", "default": false}
                ],
                "default": false,
                "type": "active-damage"
            },
            {
                "name": "Decorated Soldier",
                "skills": [],
                "default": false,
                "type": "passive"
            },
            {
                "name": "Fighting Spirit",
                "skills": [],
                "default": true,
                "type": "passive"
            },
            {
                "name": "Markovian's Advantage",
                "skills": [
                    {"name": "Zolhan's Technique","default": false}
                ],
                "default": false,
                "type": "WPS"
            },
            {
                "name": "Menhir's Will",
                "skills": [],
                "default": false,
                "type": "passive"
            },
            {
                "name": "Military Conditioning",
                "skills": [],
                "default": true,
                "type": "passive"
            },
            {
                "name": "Scars of Battle",
                "skills": [],
                "default": true,
                "type": "passive"
            },
            {
                "name": "Shield Training",
                "skills": [],
                "default": false,
                "type": "passive"
            },
            {
                "name": "Veterancy",
                "skills": [],
                "default": true,
                "type": "passive"
            },
            {
                "name": "Counter Strike",
                "skills": [],
                "default": false,
                "type": "buff-passive"
            },
            {
                "name": "Menhir's Bulwark",
                "skills": [],
                "default": false,
                "type": "exclusive"
            },
            {
                "name": "Oleron's Rage",
                "skills": [],
                "default": false,
                "type": "exclusive"
            },
            {
                "name": "Field Command",
                "skills": [
                    {"name": "Squad Tactics", "default": true}
                ],
                "default": true,
                "type": "buff-passive"
            }
        ]
    },
    {
        "class_name": "Demolitionist",
        "class_skills": [
            {
                "name": "Blackwater Cocktail",
                "skills": [
                    {"name": "Demon Fire", "default": false},
                    {"name": "Agonizing Flames", "default": false}
                ],
                "default": false,
                "type": "active-damage"
            },
            {
                "name": "Canister Bomb",
                "skills": [
                    {"name": "Improved Casing", "default": false}
                ],
                "default": false,
                "type": "active-damage"
            },
            {
                "name": "Fire Strike",
                "skills": [
                    {"name": "Explosive Strike", "default": false},
                    {"name": "Static Strike", "default": false},
                    {"name": "Brimstone", "default": false}
                ],
                "default": false,
                "type": "active-damage"
            },
            {
                "name": "Flashbang",
                "skills": [
                    {"name": "Searing Light", "default": false}
                ],
                "default": false,
                "type": "active-damage"
            },
            {
                "name": "Grenado",
                "skills": [
                    {"name": "High Impact", "default": false},
                    {"name": "Shattering Blast", "default": false}
                ],
                "default": false,
                "type": "active-damage"
            },
            {
                "name": "Mortar Trap",
                "skills": [
                    {"name": "Heavy Ordnance", "default": false},
                    {"name": "The Big One", "default": false}
                ],
                "default": false,
                "type": "active-damage"
            },
            {
                "name": "Stun Jacks",
                "skills": [
                    {"name": "Full Spread", "default": false}
                ],
                "default": false,
                "type": "active-damage"
            },
            {
                "name": "Thermite Mine",
                "skills": [
                    {"name": "Hellfire Mine", "default": false}
                ],
                "default": false,
                "type": "active-damage"
            },
            {
                "name": "Blast Shield",
                "skills": [],
                "default": true,
                "type": "passive"
            },
            {
                "name": "Ulzuin's Chosen",
                "skills": [],
                "default": false,
                "type": "passive"
            },
            {
                "name": "Flame Touched",
                "skills": [
                    {"name": "Temper", "default": true}
                ],
                "default": true,
                "type": "buff-passive"
            },
            {
                "name": "Vindictive Flame",
                "skills": [
                    {"name": "Ulzuin's Wrath", "default": false}
                ],
                "default": true,
                "type": "buff-passive"
            }
        ]
    },
    {
        "class_name": "Occultist",
        "class_skills": [
            {
                "name": "Blood of Dreeg",
                "skills": [
                    {"name": "Aspect of the Guardian", "default": true}
                ],
                "default": true,
                "type": "buff-active"
            },
            {
                "name": "Bloody Pox",
                "skills": [
                    {"name": "Wasting", "default": false},
                    {"name": "Black Death", "default": false}
                ],
                "default": false,
                "type": "active-damage"
            },
            {
                "name": "Curse of Frailty",
                "skills": [
                    {"name": "Vulnerability", "default": false}
                ],
                "default": false,
                "type": "active-damage"
            },
            {
                "name": "Doom Bolt",
                "skills": [],
                "default": false,
                "type": "active-damage"
            },
            {
                "name": "Dreeg's Evil Eye",
                "skills": [
                    {"name": "Blood Burst", "default": false},
                    {"name": "Terrifying Gaze", "default": false},
                    {"name": "Vile Eruption", "default": false}
                ],
                "default": false,
                "type": "active-damage"
            },
            {
                "name": "Sigil of Consumption",
                "skills": [
                    {"name": "Destruction", "default": false}
                ],
                "default": false,
                "type": "active-damage"
            },
            {
                "name": "Bonds of Bysmiel",
                "skills": [
                    {"name": "Manipulation", "default": false}
                ],
                "default": false,
                "type": "buff-passive"
            },
            {
                "name": "Possession",
                "skills": [],
                "default": false,
                "type": "exclusive"
            },
            {
                "name": "Solael's Witchfire",
                "skills": [
                    {"name": "Second Rite", "default": false}
                ],
                "default": false,
                "type": "buff-passive"
            },
            {
                "name": "Summon Familiar",
                "skills": [
                    {"name": "Mend Flesh", "default": false},
                    {"name": "Storm Spirit", "default": false},
                    {"name": "Lightning Strike", "default": false}
                ],
                "default": false,
                "type": "pet"
            },
            {
                "name": "Summon Hellhound",
                "skills": [
                    {"name": "Ember Claw", "default": false},
                    {"name": "Hellfire", "default": false},
                    {"name": "Infernal Breath", "default": false}
                ],
                "default": false,
                "type": "pet"
            }
        ]
    },
    {
        "class_name": "Nightblade",
        "class_skills": [
            {
                "name": "Amarasta's Blade Burst",
                "skills": [
                    {"name": "Lethal Assault", "default": false}
                ],
                "default": false,
                "type": "active-damage"
            },
            {
                "name": "Blade Barrier",
                "skills": [],
                "default": false,
                "type": "active-damage"
            },
            {
                "name": "Blade Spirit",
                "skills": [],
                "default": false,
                "type": "passive-damage"
            },
            {
                "name": "Blade Trap",
                "skills": [
                    {"name": "Devouring Blades", "default": false}
                ],
                "default": false,
                "type": "active-damage"
            },
            {
                "name": "Phantasmal Blades",
                "skills": [
                    {"name": "Heart Seeker", "default": false},
                    {"name": "Nether Edge", "default": false}
                ],
                "default": false,
                "type": "active-damage"
            },
            {
                "name": "Pneumatic Burst",
                "skills": [
                    {"name": "Shadow Dance", "default": true},
                    {"name": "Elemental Awakening", "default": false}
                ],
                "default": true,
                "type": "buff-active"
            },
            {
                "name": "Ring of Steel",
                "skills": [
                    {"name": "Circle of Slaughter", "default": false}
                ],
                "default": false,
                "type": "active-damage"
            },
            {
                "name": "Shadow Strike",
                "skills": [
                    {"name": "Nidalla's Justifiable Ends", "default": false},
                    {"name": "Nightfall", "default": false}
                ],
                "default": false,
                "type": "active-damage"
            },
            {
                "name": "Anatomy of Murder",
                "skills": [],
                "default": false,
                "type": "passive"
            },
            {
                "name": "Dual Blades",
                "skills": [],
                "default": false,
                "type": "passive"
            },
            {
                "name": "Belgothian's Shears",
                "skills": [
                    {"name": "Nidalla's Hidden Hand", "default": false},
                    {"name": "Amarasta's Quick Cut", "default": false},
                    {"name": "Whirling Death", "default": false},
                    {"name": "Execution", "default": false}
                ],
                "default": false,
                "type": "WPS"
            },
            {
                "name": "Merciless Repertoire",
                "skills": [],
                "default": false,
                "type": "passive"
            },
            {
                "name": "Phantasmal Armor",
                "skills": [],
                "default": true,
                "type": "passive"
            },
            {
                "name": "Veil of Shadow",
                "skills": [
                    {"name": "Night's Chill", "default": false}
                ],
                "default": true,
                "type": "buff-passive"
            }
        ]
    },
    {
        "class_name": "Aranist",
        "class_skills": [
            {
                "name": "Albrecht's Aether Ray",
                "skills": [
                    {"name": "Disintegration", "default": false}
                ],
                "default": false,
                "type": "active-damage"
            },
            {
                "name": "Callidor's Tempest",
                "skills": [
                    {"name": "Inferno", "default": false}
                ],
                "default": false,
                "type": "active-damage"
            },
            {
                "name": "Devastation",
                "skills": [],
                "default": false,
                "type": "active-damage"
            },
            {
                "name": "Maiven's Sphere of Protection",
                "skills": [
                    {"name": "Conversion", "default": true}
                ],
                "default": true,
                "type": "active-damage"
            },
            {
                "name": "Mirror of Ereoctes",
                "skills": [],
                "default": true,
                "type": "buff-active"
            },
            {
                "name": "Nullification",
                "skills": [],
                "default": true,
                "type": "buff-active"
            },
            {
                "name": "Olexra's Flash Freeze",
                "skills": [
                    {"name": "Absolute Zero", "default": false}
                ],
                "default": false,
                "type": "active-damage"
            },
            {
                "name": "Panetti's Replicating Missile",
                "skills": [
                    {"name": "Distortion", "default": false},
                    {"name": "Supercharged", "default": false},
                    {"name": "Proliferation", "default": false}
                ],
                "default": false,
                "type": "active-damage"
            },
            {
                "name": "Trozan's Sky Shard",
                "skills": [
                    {"name": "Frozen Core", "default": false},
                    {"name": "Shattered Star", "default": false}
                ],
                "default": false,
                "type": "active-damage"
            },
            {
                "name": "Arcane Will",
                "skills": [],
                "default": true,
                "type": "passive"
            },
            {
                "name": "Fabric of Reality",
                "skills": [],
                "default": false,
                "type": "passive"
            },
            {
                "name": "Inner Focus",
                "skills": [],
                "default": true,
                "type": "passive"
            },
            {
                "name": "Mental Alacrity",
                "skills": [],
                "default": false,
                "type": "passive"
            },
            {
                "name": "Iskandra's Elemental Exchange",
                "skills": [
                    {"name": "Overload", "default": true},
                    {"name": "Elemental Balance", "default": true}
                ],
                "default": false,
                "type": "buff-passive"
            },
            {
                "name": "Reckless Power",
                "skills": [],
                "default": false,
                "type": "exclusive"
            },
            {
                "name": "Star Pact",
                "skills": [],
                "default": false,
                "type": "exclusive"
            }
        ]
    },
    {
        "class_name": "Shaman",
        "class_skills": [
            {
                "name": "Brute Force",
                "skills": [],
                "default": false,
                "type": "passive"
            },
            {
                "name": "Feral Hunger",
                "skills": [
                    {"name": "Upheaval", "default": false}
                ],
                "default": false,
                "type": "WPS"
            },
            {
                "name": "Devouring Swarm",
                "skills": [],
                "default": false,
                "type": "active-damage"
            },
            {
                "name": "Grasping Vines",
                "skills": [
                    {"name": "Entangling Vines", "default": false}
                ],
                "default": false,
                "type": "active-damage"
            },
            {
                "name": "Primal Strike",
                "skills": [
                    {"name": "Torrent", "default": false},
                    {"name": "Storm Surge", "default": false}
                ],
                "default": false,
                "type": "active-damage"
            },
            {
                "name": "Savagery",
                "skills": [
                    {"name": "Tenacity of the Boar", "default": false},
                    {"name": "Storm Touched", "default": false}
                ],
                "default": false,
                "type": "active-damage"
            },
            {
                "name": "Mogdrogen's Pact",
                "skills": [
                    {"name": "Heart of the Wild", "default": true},
                    {"name": "Oak Skin", "default": false}
                ],
                "default": true,
                "type": "buff-passive"
            },
            {
                "name": "Primal Bond",
                "skills": [],
                "default": false,
                "type": "exclusive"
            },
            {
                "name": "Stormcaller's Pact",
                "skills": [],
                "default": false,
                "type": "exclusive"
            },
            {
                "name": "Conjure Primal Spirit",
                "skills": [],
                "default": false,
                "type": "active-damage"
            },
            {
                "name": "Storm Totem",
                "skills": [],
                "default": false,
                "type": "active-damage"
            },
            {
                "name": "Summon Briarthorn",
                "skills": [
                    {"name": "Ground Slam", "default": false},
                    {"name": "Emboldening Presence", "default": false}
                ],
                "default": false,
                "type": "pet"
            },
            {
                "name": "Wendigo Totem",
                "skills": [
                    {"name": "Blood Pact", "default": false}
                ],
                "default": false,
                "type": "active-damage"
            },
            {
                "name": "Wind Devil",
                "skills": [
                    {"name": "Raging Tempest", "default": false},
                    {"name": "Maelstrom", "default": false}
                ],
                "default": false,
                "type": "active-damage"
            }
        ]
    },
    {
        "class_name": "Inquisitor",
        "class_skills": [
            {
                "name": "Flames of Ignaffar",
                "skills": [
                    {"name": "Intensify", "default": false},
                    {"name": "Infernal Purge", "default": false},
                    {"name": "Endless Flame", "default": false}
                ],
                "default": false,
                "type": "active-damage"
            },
            {
                "name": "Horn of Gandarr",
                "skills": [],
                "default": false,
                "type": "active-damage"
            },
            {
                "name": "Inquisitor Seal",
                "skills": [
                    {"name": "Arcane Empowerment", "default": true}
                ],
                "default": true,
                "type": "buff-active"
            },
            {
                "name": "Rune of Hagarrad",
                "skills": [
                    {"name": "Biting Cold", "default": false},
                    {"name": "Chillsurge", "default": false}
                ],
                "default": false,
                "type": "active-damage"
            },
            {
                "name": "Rune of Kalastor",
                "skills": [
                    {"name": "Ignition", "default": false}
                ],
                "default": false,
                "type": "active-damage"
            },
            {
                "name": "Storm Box of Elgoloth",
                "skills": [
                    {"name": "Lightning Tether", "default": false}
                ],
                "default": false,
                "type": "active-damage"
            },
            {
                "name": "Word of Pain",
                "skills": [
                    {"name": "Word of Agony", "default": false},
                    {"name": "Death Sentence", "default": false}
                ],
                "default": false,
                "type": "active-damage"
            },
            {
                "name": "Word of Renewal",
                "skills": [
                    {"name": "Vigor", "default": true},
                    {"name": "Steel Resolve", "default": true}
                ],
                "default": true,
                "type": "buff-active"
            },
            {
                "name": "Artifact Handling",
                "skills": [],
                "default": false,
                "type": "passive"
            },
            {
                "name": "Deadly Aim",
                "skills": [],
                "default": true,
                "type": "passive"
            },
            {
                "name": "Ranged Expertise",
                "skills": [],
                "default": false,
                "type": "passive"
            },
            {
                "name": "Bursting Round",
                "skills": [
                    {"name": "Chilling Rounds", "default": false},
                    {"name": "Storm Spread", "default": false}
                ],
                "default": false,
                "type": "WPS"
            },
            {
                "name": "Aura of Censure",
                "skills": [],
                "default": false,
                "type": "exclusive"
            },
            {
                "name": "Aura of Conviction",
                "skills": [],
                "default": false,
                "type": "exclusive"
            }
        ]
    },
    {
        "class_name": "Necromancer",
        "class_skills": [
            {
                "name": "Bone Harvest",
                "skills": [
                    {"name": "Dread", "default": false},
                    {"name": "Soul Harvest", "default": false}
                ],
                "default": false,
                "type": "active-damage"
            },
            {
                "name": "Call of the Grave",
                "skills": [],
                "default": true,
                "type": "buff-active"
            },
            {
                "name": "Drain Essence",
                "skills": [
                    {"name": "Hungering Reach", "default": false},
                    {"name": "Decomposition", "default": false}
                ],
                "default": false,
                "type": "active-damage"
            },
            {
                "name": "Ill Omen",
                "skills": [],
                "default": false,
                "type": "active-damage"
            },
            {
                "name": "Mark of Torment",
                "skills": [],
                "default": true,
                "type": "buff-active"
            },
            {
                "name": "Ravenous Earth",
                "skills": [
                    {"name": "Decay", "default": false},
                    {"name": "Foul Eruption", "default": false}
                ],
                "default": false,
                "type": "active-damage"
            },
            {
                "name": "Reap Spirit",
                "skills": [],
                "default": false,
                "type": "pet"
            },
            {
                "name": "Siphon Souls",
                "skills": [
                    {"name": "Blood Boil", "default": false}
                ],
                "default": false,
                "type": "active-damage"
            },
            {
                "name": "Necrotic Edge",
                "skills": [
                    {"name": "Reaping Strike", "default": false}
                ],
                "default": false,
                "type": "WPS"
            },
            {
                "name": "Harbinger of Souls",
                "skills": [],
                "default": false,
                "type": "exclusive"
            },
            {
                "name": "Master of Death",
                "skills": [],
                "default": false,
                "type": "exclusive"
            },
            {
                "name": "Spectral Binding",
                "skills": [
                    {"name": "Spectral Wrath", "default": false}
                ],
                "default": true,
                "type": "buff-passive"
            },
            {
                "name": "Raise Skeletons",
                "skills": [
                    {"name": "Undead Legion", "default": false},
                    {"name": "Will of the Crypt", "default": false}
                ],
                "default": false,
                "type": "pet"
            },
            {
                "name": "Summon Blight Fiend",
                "skills": [
                    {"name": "Rotting Fumes", "default": false},
                    {"name": "Blight Burst", "default": false}
                ],
                "default": false,
                "type": "pet"
            }
        ]
    },
    {
        "class_name": "Oathkeeper",
        "class_skills": [
            {
                "name": "Aegis of Menhir",
                "skills": [
                    {"name": "Avenging Shield", "default": false},
                    {"name": "Reprisal", "default": false}
                ],
                "default": false,
                "type": "active-damage"
            },
            {
                "name": "Ascension",
                "skills": [
                    {"name": "Clarity of Purpose", "default": true}
                ],
                "default": true,
                "type": "buff-active"
            },
            {
                "name": "Eye of Reckoning",
                "skills": [
                    {"name": "Soulfire", "default": false}
                ],
                "default": false,
                "type": "active-damage"
            },
            {
                "name": "Judgment",
                "skills": [
                    {"name": "Crushing Verdict", "default": false},
                    {"name": "Heart of Wrath", "default": false}
                ],
                "default": false,
                "type": "active-damage"
            },
            {
                "name": "Righteous Fervor",
                "skills": [
                    {"name": "Consecration", "default": false},
                    {"name": "Retribution", "default": false}
                ],
                "default": false,
                "type": "active-damage"
            },
            {
                "name": "Vire's Might",
                "skills": [
                    {"name": "Volcanic Stride", "default": false},
                    {"name": "Tectonic Shift", "default": false}
                ],
                "default": false,
                "type": "active-damage"
            },
            {
                "name": "Resilience",
                "skills": [],
                "default": true,
                "type": "passive"
            },
            {
                "name": "Safeguard",
                "skills": [],
                "default": false,
                "type": "passive"
            },
            {
                "name": "Smite",
                "skills": [
                    {"name": "Shattering Smash", "default": false}
                ],
                "default": false,
                "type": "WPS"
            },
            {
                "name": "Divine Mandate",
                "skills": [],
                "default": false,
                "type": "exclusive"
            },
            {
                "name": "Path of the Three",
                "skills": [],
                "default": false,
                "type": "exclusive"
            },
            {
                "name": "Presence of Virtue",
                "skills": [
                    {"name": "Haven", "default": true},
                    {"name": "Rebuke", "default": false}
                ],
                "default": true,
                "type": "buff-passive"
            },
            {
                "name": "Summon Guardian of Empyrion",
                "skills": [
                    {"name": "Celestial Presence", "default": false}
                ],
                "default": false,
                "type": "passive-damage"
            }
        ]
    }
];

const all_types = [
    {"raw_type": "active-damage", "name": "Damage (Active)"},
    {"raw_type": "WPS", "name": "WPS"},
    {"raw_type": "pet", "name": "Pet Damage"},
    {"raw_type": "passive-damage", "name": "Damage (Passive)"},
    {"raw_type": "passive", "name": "Passive"},
    {"raw_type": "buff-active", "name": "Buff (Active)"},
    {"raw_type": "buff-passive", "name": "Buff (Passive)"},
    {"raw_type": "exclusive", "name": "Exclusive"},
];


function get_skills_for_class(class_name) {
    for (let i = 0; i < all_skills.length; i++) {
        if (all_skills[i].class_name === class_name) {
            return all_skills[i].class_skills;
        }
    }
}

function get_skills_by_type(class_skills, skill_type) {
    let skills = [];
    for (let i=0;i<class_skills.length; i++){
        if (class_skills[i].type === skill_type){
            skills.push(class_skills[i])
        }
    }
    return skills;
}