export interface Basic {
  character_name: string;
  character_date_create: number | null;
  character_date_last_login: string;
  character_date_last_logout: string;
  character_class_name: string;
  character_gender: string;
  character_exp: number;
  character_level: number;
  cairde_name: string;
  title_count: number;
  id_title_count: number;
  total_title_count: number;
  title_stat: { stat_name: string; stat_value: string }[];
  skill_awakening: { skill_name: string; item_name: string }[];
  dress_point: {
    total_point: number;
    avatar_point: number;
    back_point: number;
    tail_point: number;
    object_point: number;
  };
}

export interface Stat {
  stat_name: string;
  stat_value: string;
}

export interface Guild {
  guild_name: string;
}

export interface MergedCharacter {
  name: string;
  info: Stat[];
  stat: Stat[];
}
