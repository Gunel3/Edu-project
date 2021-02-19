<template>
  <v-main class="grey lighten-4">
    <v-container>
      <v-row>
        <v-col cols="12" sm="3">
          <div class="feed_search">
            <v-autocomplete
              clearable
              placeholder="axtar"
              dense
              filled
              background-color="white"
              rounded
            ></v-autocomplete>
          </div>
          <v-sheet rounded="lg" min-height="268" class="left_feed">
            <div class="profile_box">
              <div class="profile_box-avatar">
                <v-avatar color="grey lighten-2" size="140"> </v-avatar>
              </div>
              <div class="profile_box-fullname">Full Name</div>
              <div class="profile_box-buttons">
                <button class="profile_box-buttons-connections">
                  <div class="profile_box-buttons-connections-content">
                    <svg
                      class="mr-lg profile_box-buttons-connections-user"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#f0eaea"
                      width="18px"
                      height="18px"
                    >
                      <path d="M0 0h24v24H0z" fill="none" fill-rule="evenodd" />
                      <g fill-rule="evenodd">
                        <path
                          d="M9 17l3-2.94c-.39-.04-.68-.06-1-.06-2.67 0-8 1.34-8 4v2h9l-3-3zm2-5c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4"
                        />
                        <path
                          d="M15.47 20.5L12 17l1.4-1.41 2.07 2.08 5.13-5.17 1.4 1.41z"
                        />
                      </g>
                    </svg>
                    <span> Bağlantım </span>
                  </div>
                </button>
                <button class="profile_box-buttons-email">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                  >
                    <title>envelope</title>
                    <path
                      d="M29 4h-26c-1.657 0-3 1.343-3 3v18c0 1.656 1.343 3 3 3h26c1.657 0 3-1.344 3-3v-18c0-1.657-1.343-3-3-3zM2.741 25.99l-0.731-0.732 8.249-8.248 0.731 0.732-8.249 8.248zM29.259 25.99l-8.249-8.248 0.731-0.732 8.249 8.248-0.731 0.732zM17 19.325v0.675h-2v-0.675l-12.997-12.050 1.272-1.272 12.725 11.798 12.725-11.798 1.272 1.272-12.997 12.050z "
                      fill="#5D5D5D"
                    ></path>
                  </svg>
                </button>
                <div class="profile_box-buttons-features">
                  <v-menu
                    v-for="[text, rounded] in btns"
                    :key="text"
                    :rounded="rounded"
                    offset-x
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <button v-bind="attrs" v-on="on">
                        <v-icon> mdi-dots-vertical</v-icon>
                        <!-- <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="#5D5D5D"
                          >
                            <path d="M0 0h24v24H0V0z" fill="none" />
                            <path
                              d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                            />
                          </svg> -->
                      </button>
                    </template>
                    <v-list class="menu_list">
                      <v-list-item class="menu_list-item" link>
                        <v-list-item-title>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="#5D5D5D"
                          >
                            <path d="M0 0h24v24H0V0z" fill="none" />
                            <path
                              d="M14.4 6l-.24-1.2c-.09-.46-.5-.8-.98-.8H6c-.55 0-1 .45-1 1v15c0 .55.45 1 1 1s1-.45 1-1v-6h5.6l.24 1.2c.09.47.5.8.98.8H19c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1h-4.6z"
                            />
                          </svg>
                          {{ sections[0] }}</v-list-item-title
                        >
                      </v-list-item>
                      <v-list-item class="menu_list-item" link>
                        <v-list-item-title>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            enable-background="new 0 0 24 24"
                            viewBox="0 0 24 24"
                            fill="#5D5D5D"
                          >
                            <g><rect fill="none" height="24" width="24" /></g>
                            <g>
                              <path
                                d="M14,8c0-2.21-1.79-4-4-4S6,5.79,6,8s1.79,4,4,4S14,10.21,14,8z M17,10v2h6v-2H17z M2,18v2h16v-2c0-2.66-5.33-4-8-4 S2,15.34,2,18z"
                              />
                            </g>
                          </svg>
                          {{ sections[1] }}</v-list-item-title
                        >
                      </v-list-item>
                      <v-list-item class="menu_list-item" link>
                        <v-list-item-title>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="#5D5D5D"
                          >
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path
                              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z"
                            />
                          </svg>
                          {{ sections[2] }}</v-list-item-title
                        >
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </div>
              </div>
            </div>

            <div class="connections_info">
              <p class="connections_info-heading">Bağlantılarım</p>
              <span class="connections_info-number">0</span>
            </div>

            <div class="user_informations">
              <div class="user_informations-item">
                <div class="user_informations-item--icon">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                  >
                    <title>user-tie</title>
                    <path
                      d="M10 6c0-3.314 2.686-6 6-6s6 2.686 6 6c0 3.314-2.686 6-6 6s-6-2.686-6-6zM24.002 14h-1.107l-6.222 12.633 2.327-11.633-3-3-3 3 2.327 11.633-6.222-12.633h-1.107c-3.998 0-3.998 2.687-3.998 6v10h24v-10c0-3.313 0-6-3.998-6z"
                      fill="#5D5D5D"
                    ></path>
                  </svg>
                </div>
                <div
                  class="user_informations-item--info user_informations-item--info-position"
                >
                  position
                </div>
              </div>
              <div class="user_informations-item">
                <div class="user_informations-item--icon">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 28 28"
                  >
                    <title>briefcase</title>
                    <path
                      d="M10 4h8v-2h-8v2zM28 14v7.5c0 1.375-1.125 2.5-2.5 2.5h-23c-1.375 0-2.5-1.125-2.5-2.5v-7.5h10.5v2.5c0 0.547 0.453 1 1 1h5c0.547 0 1-0.453 1-1v-2.5h10.5zM16 14v2h-4v-2h4zM28 6.5v6h-28v-6c0-1.375 1.125-2.5 2.5-2.5h5.5v-2.5c0-0.828 0.672-1.5 1.5-1.5h9c0.828 0 1.5 0.672 1.5 1.5v2.5h5.5c1.375 0 2.5 1.125 2.5 2.5z"
                      fill="#5D5D5D"
                    ></path>
                  </svg>
                </div>
                <div
                  class="user_informations-item--info user_informations-item--info-work"
                >
                  work
                </div>
              </div>
              <div class="user_informations-item">
                <div class="user_informations-item--icon">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 28 28"
                  >
                    <title>briefcase</title>
                    <path
                      d="M10 4h8v-2h-8v2zM28 14v7.5c0 1.375-1.125 2.5-2.5 2.5h-23c-1.375 0-2.5-1.125-2.5-2.5v-7.5h10.5v2.5c0 0.547 0.453 1 1 1h5c0.547 0 1-0.453 1-1v-2.5h10.5zM16 14v2h-4v-2h4zM28 6.5v6h-28v-6c0-1.375 1.125-2.5 2.5-2.5h5.5v-2.5c0-0.828 0.672-1.5 1.5-1.5h9c0.828 0 1.5 0.672 1.5 1.5v2.5h5.5c1.375 0 2.5 1.125 2.5 2.5z"
                      fill="#5D5D5D"
                    ></path>
                  </svg>
                </div>
                <div
                  class="user_informations-item--info user_informations-item--info-worked"
                >
                  worked
                </div>
              </div>
              <div class="user_informations-item">
                <div class="user_informations-item--icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#5D5D5D"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path
                      d="M5 13.18v2.81c0 .73.4 1.41 1.04 1.76l5 2.73c.6.33 1.32.33 1.92 0l5-2.73c.64-.35 1.04-1.03 1.04-1.76v-2.81l-6.04 3.3c-.6.33-1.32.33-1.92 0L5 13.18zm6.04-9.66l-8.43 4.6c-.69.38-.69 1.38 0 1.76l8.43 4.6c.6.33 1.32.33 1.92 0L21 10.09V16c0 .55.45 1 1 1s1-.45 1-1V9.59c0-.37-.2-.7-.52-.88l-9.52-5.19c-.6-.32-1.32-.32-1.92 0z"
                    />
                  </svg>
                </div>
                <div
                  class="user_informations-item--info user_informations-item--info-education"
                >
                  education
                </div>
              </div>
              <div class="user_informations-item">
                <div class="user_informations-item--icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#5D5D5D"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path
                      d="M12 12c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0-10c4.2 0 8 3.22 8 8.2 0 3.18-2.45 6.92-7.34 11.23-.38.33-.95.33-1.33 0C6.45 17.12 4 13.38 4 10.2 4 5.22 7.8 2 12 2z"
                    />
                  </svg>
                </div>
                <div
                  class="user_informations-item--info user_informations-item--info-location"
                >
                  location
                </div>
              </div>
            </div>
            <div class="save">
              <div class="save_icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path
                    d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"
                  />
                </svg>
              </div>
              <div class="save_heading">Yadda saxlanılanlar</div>
            </div>
          </v-sheet>
          <div class="link_box">
            <ul class="link_box-list">
              <li class="link_box-list--item">
                <router-link to="#" class="link_box-list--item-link">
                  Haqqımızda
                </router-link>
              </li>
              <li class="link_box-list--item">
                <router-link to="#" class="link_box-list--item-link">
                  Əlaqə
                </router-link>
              </li>
              <li class="link_box-list--item">
                <router-link to="#" class="link_box-list--item-link">
                  Əməkdaşlıq
                </router-link>
              </li>
              <li class="link_box-list--item">
                <router-link to="#" class="link_box-list--item-link">
                  Sistem necə işləyir
                </router-link>
              </li>
              <li class="link_box-list--item">
                <router-link to="#" class="link_box-list--item-link">
                  Xidmət şərtləri
                </router-link>
              </li>
              <li class="link_box-list--item">
                <router-link to="#" class="link_box-list--item-link">
                  Məxfilik siyasəti
                </router-link>
              </li>
              <li class="link_box-list--item">
                <router-link to="#" class="link_box-list--item-link">
                  Geri ödəmə siyasəti
                </router-link>
              </li>
              <li class="link_box-list--item">
                <router-link to="#" class="link_box-list--item-link">
                  Studerm &copy; 2020
                </router-link>
              </li>
            </ul>
          </div>
        </v-col>

        <v-col cols="12" sm="6">
          <div class="post_box">
            <div class="post_box-share">
              <div class="post_box-share--avatar mr-lg">
                <v-avatar color="grey lighten-2" size="80"> </v-avatar>
              </div>
              <v-textarea
                class="post_box-share--input-post"
                filled
                height="88px"
                background-color="#f3f2f2"
                solo
                name="input-7-4"
                label="Add a post"
              ></v-textarea>
            </div>
            <div class="post_box-input--file">
              <div class="post_box-input--file-select">
                <v-select
                  :items="items"
                  :menu-props="{ bottom: true, offsetY: true }"
                  prepend-inner-icon="mdi-earth"
                  dense
                  outlined
                ></v-select>
              </div>
              <div class="post_box-input--file-item">
                <v-file-input
                  prepend-icon="mdi-square"
                  hide-input
                  truncate-length="10"
                ></v-file-input>
                <span>Şəkil</span>
              </div>
              <div class="post_box-input--file-item">
                <v-file-input
                  prepend-icon="mdi-square"
                  hide-input
                  truncate-length="10"
                ></v-file-input>
                <span>Video</span>
              </div>
              <div class="post_box-input--file-item">
                <v-file-input
                  prepend-icon="mdi-folder"
                  label="sekil"
                  hide-input
                  truncate-length="10"
                ></v-file-input>
                <span>Fayl</span>
              </div>
              <button class="post_box-input--file-button">Paylaş</button>
            </div>
          </div>
          <br />
          <div class="button_box">
            <button class="button_box-button">Bütün paylaşımlar</button>
            <button class="button_box-button">Mənim paylaşımlarım</button>
          </div>
          <br />
          <v-sheet min-height="70vh" rounded="lg" class="feed center_feed">
            <div class="shared_post">
              <div class="shared_post-info">
                <div class="shared_post-info--user">
                  <div class="shared_post-info--user-avatar">
                    <v-avatar
                      class="profile_box-avatar mr"
                      color="grey lighten-2"
                      size="67"
                    >
                    </v-avatar>
                  </div>
                  <div class="shared_post-info--user-infobox">
                    <p class="shared_post-info--user-infobox-fulname">
                      FulName
                    </p>
                    <span class="shared_post-info--user-infobox-time"
                      >0 mins</span
                    >
                    &middot;<v-icon small>mdi-account-multiple</v-icon>
                  </div>
                </div>
                <v-menu
                  v-for="[text, rounded] in btns"
                  :key="text"
                  :rounded="rounded"
                  offset-y
                >
                  <template v-slot:activator="{ on, attrs }">
                    <button v-bind="attrs" v-on="on">
                      <v-icon> mdi-dots-horizontal</v-icon>
                    </button>
                  </template>
                  <v-list class="menu_list">
                    <v-list-item class="menu_list-item" link>
                      <v-list-item-title>
                        <v-icon class="mr">mdi-delete</v-icon>
                        {{ sections[3] }}</v-list-item-title
                      >
                    </v-list-item>
                    <v-list-item class="menu_list-item" link>
                      <v-list-item-title>
                        <v-icon class="mr">mdi-square-edit-outline</v-icon>

                        {{ sections[4] }}</v-list-item-title
                      >
                    </v-list-item>
                    <v-list-item class="menu_list-item" link>
                      <v-list-item-title>
                        <v-icon class="mr">mdi-content-copy</v-icon>
                        {{ sections[5] }}</v-list-item-title
                      >
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>
              <br />
              <v-divider></v-divider>
              <br />
              <div class="shared_post-content">
                <p class="shared_post-content--text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
                  placeat voluptatibus et sed eligendi quaerat tenetur rem
                  nulla, architecto at possimus natus. Nesciunt, cumque et
                  dolore sapiente maiores repudiandae aut. Lorem ipsum dolor sit
                  amet consectetur, adipisicing elit. Ab placeat voluptatibus et
                  sed eligendi quaerat tenetur rem nulla, architecto at possimus
                  natus. Nesciunt, cumque et dolore sapiente maiores repudiandae
                  aut. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Ab placeat voluptatibus et sed eligendi quaerat tenetur rem
                  nulla, architecto at possimus natus. Nesciunt, cumque et
                  dolore sapiente maiores repudiandae aut.
                </p>
                <br />
                <div class="shared_post-content--info">
                  <v-icon color="white" small class="content-icon mr"
                    >mdi-thumb-up</v-icon
                  >
                  <span>0</span> &middot; &nbsp;
                  <span>0 rəy</span>
                </div>
                <br />
                <v-divider></v-divider>
                <div class="shared_post-content--buttons">
                  <button class="shared_post-content--buttons-button">
                    <v-icon class="mr">mdi-thumb-up</v-icon>
                    <span class="shared_post-content--info">Faydalı</span>
                  </button>
                  <button class="shared_post-content--buttons-button">
                    <v-icon class="mr">mdi-comment</v-icon>
                    <span class="shared_post-content--info">Rəy yaz</span>
                  </button>
                  <button class="shared_post-content--buttons-button">
                    <v-icon class="mr">mdi-share</v-icon>
                    <span class="shared_post-content--info">Paylaş</span>
                  </button>
                  <button class="shared_post-content--buttons-button">
                    <v-icon>mdi-bookmark-outline</v-icon>
                  </button>
                </div>
                <v-divider></v-divider>
                <br />
                <div class="shared_post-commentbox">
                  <div class="shared_post-commentbox--add">
                    <v-avatar
                      class="shared_post-commentbox-avatar mr"
                      color="grey lighten-2"
                      size="67"
                    >
                    </v-avatar>
                    <v-textarea
                      append-icon="mdi-comment-multiple"
                      height="5px"
                      filled
                      background-color="#f3f2f2"
                      solo
                      name="input-7-1"
                      label="Add comment"
                    ></v-textarea>
                  </div>
                  <div class="shared_post-commentbox--commented">
                    <v-avatar
                      class="shared_post-commentbox-avatar mr"
                      color="grey lighten-2"
                      size="67"
                    >
                    </v-avatar>
                    <div class="shared_post-commentbox--comment">
                      <div class="shared_post-commentbox--comment-info">
                        <div
                          class="shared_post-commentbox--comment-info--above"
                        >
                          <span
                            class="shared_post-commentbox--comment-info--above-fullname"
                          >
                            FullName
                          </span>
                          <div
                            class="shared_post-commentbox--comment-info--above-time"
                          >
                            <span class="subtext mr">0 saat</span>
                            <v-icon>mdi-dots-horizontal</v-icon>
                          </div>
                        </div>
                        <p
                          class="shared_post-commentbox--comment-info--above-text"
                        >
                          pisci animi autem soluta lajbsjhajvoptio!
                        </p>
                      </div>
                      <br />
                      <div
                        class="shared_post-commentbox--commented-subinfo subtext"
                      >
                        <button>Bəğən</button>
                        &middot;
                        <v-icon
                          x-small
                          class="content-icon mr shared_post-commentbox--commented-subinfo-icon"
                          color="white"
                          >mdi-thumb-up</v-icon
                        >
                        <span>0 </span> | <button>Cavab ver</button> &middot;
                        <span>0 Cavab</span>
                      </div>
                    </div>
                    <br />
                  </div>
                  <!-- <br />
                  <span class="subtext">Daha çox cavabı gör</span>
                   -->
                  <br />
                  <button class="shared_post--more_text">Daha çox rəy gör</button>
                </div>
              </div>
            </div>
          </v-sheet>
        </v-col>

        <v-col cols="12" sm="3">
          <v-sheet rounded="lg" min-height="268" class="feed right_feed">
            <div class="feed_heading">Kontakt</div>
            <br />
            <div class="feed_search">
              <v-autocomplete
                clearable
                placeholder="axtar"
                dense
                filled
                rounded
              ></v-autocomplete>
            </div>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  components: {
    Header,
  },
  data: () => ({
    btns: [["Large", "lg"]],
    sections: [
      "Profili şikayət et",
      "Bağlantını ləğv et",
      "Əngəllə",
      "Sil",
      "Düzəliş et",
      "Linki kopyala",
    ],
    items: ["Bağlantılarım", "Hamı"],
  }),
};
</script>

<style>
</style>