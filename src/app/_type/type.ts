export interface CharacterBasic {
  character_name: string;
  character_date_create: number | null;
  character_date_last_login: string;
  character_date_last_logout: string;
  character_class_name: string;
  character_gender: string;
  character_exp: number;
  character_level: number;
}

export interface CharacterStat {
  stat_id: string;
  stat_value: string;
}

export interface Guild {
  guild_name: string;
}

export interface FetchStats {
  stat: CharacterStat[];
}

export interface MergedCharacter {
  name: string;
  basic: {
    name: string;
    class: string;
    guild: string;
    level: string;
  };
  stat: CharacterStat[];
}
