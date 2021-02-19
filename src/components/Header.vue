<template>
<v-app-bar>
  <div class="header">
    <div class="container">
      <div class="header_components">
        <div class="header_components-logo-box">
          <img
            class="header_components-logo-box-img"
            src="../assets/img/Artboard 4@3x-8.png"
            alt=""
          />
        </div>
        <Navigation />
        <div class="header_components-info-box">
          <div data-app class="header_components-info-box_budget">
            <v-menu close-on-content-click offset-y rounded>
              <template v-slot:activator="{ on, attrs }">
                <button v-bind="attrs" v-on="on" class="btn-budget">
                  <svg
                    class="icon-budget"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                  >
                    <title>wallet1</title>
                    <path
                      d="M18 22c-1.104 0-2-0.896-2-2v-2c0-1.105 0.896-2 2-2h12v6h-12zM19.5 17.583c-0.828 0-1.5 0.672-1.5 1.5 0 0.829 0.672 1.5 1.5 1.5 0.829 0 1.5-0.671 1.5-1.5 0-0.828-0.671-1.5-1.5-1.5zM15 18v2c0 1.656 1.344 3 3 3h10v4c0 1.656-1.343 3-3 3h-21c-1.656 0-3-1.344-3-3v-19c0-1.657 1.344-3 3-3h9.632l-2.349 0.979h-7.782c-0.828 0-1.5 0.672-1.5 1.5s0.672 1.5 1.5 1.5h24.499v6.021h-10c-1.656 0-3 1.343-3 3zM5.001 11h-2v2h1v-1h1v-1zM5.001 14h-2v2h1.041l-0.041-1 1 0.021v-1.021zM5.001 17h-2v2h1.021l-0.021-1h1v-1zM5.001 20h-2v2h1.021l-0.021-1 1 0.021v-1.021zM5.001 23h-2v2h1v-1h1v-1zM5.001 26h-2v2h1.021l-0.021-0.979h1v-1.021zM9.001 7.938l11.75-4.938 2.25 4.938h-14zM22.646 5h2.354c0.876 0 1.656 0.381 2.205 0.979h-4.081l-0.478-0.979z"
                      fill="#f0eaea"
                    ></path>
                  </svg>

                  <span>0.00</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    width="18px"
                    height="18px"
                  >
                    <path
                      d="M8.12 9.29L12 13.17l3.88-3.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0L6.7 10.7c-.39-.39-.39-1.02 0-1.41.39-.38 1.03-.39 1.42 0z"
                    />
                  </svg>
                </button>
              </template>
              <v-list>
                <div class="budget-content">
                  <span class="budget-content-heading-1">Qazancınız</span>
                  <div class="budget-content-amount">
                    <span class="mr">amount</span>
                    <span>AZN</span>
                  </div>
                </div>
              </v-list>
            </v-menu>
          </div>
          <div data-app class="header_components-info-box-lang">
            <v-menu
              v-for="[text, rounded] in btns"
              :key="text"
              :rounded="rounded"
              offset-y
            >
              <template v-slot:activator="{ on, attrs }">
                <button v-bind="attrs" v-on="on" class="btn-budget">
                  <span>AZE</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                  >
                    <path
                      d="M8.12 9.29L12 13.17l3.88-3.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0L6.7 10.7c-.39-.39-.39-1.02 0-1.41.39-.38 1.03-.39 1.42 0z"
                    />
                  </svg>
                </button>
              </template>
              <v-list class="menu_list">
                <v-list-item class="menu_list-item" v-for="item in items" :key="item" link>
                  <v-list-item-title class="menu_list-item--title">{{item}}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
          <div class="header_components-info-box_icons">
            <div class="header_components-info-box_icons-user mr">
              <v-badge overlap color="#ff0000">
                <button class="icon-btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path
                      d="M9 13.75c-2.34 0-7 1.17-7 3.5V19h14v-1.75c0-2.33-4.66-3.5-7-3.5zM4.34 17c.84-.58 2.87-1.25 4.66-1.25s3.82.67 4.66 1.25H4.34zM9 12c1.93 0 3.5-1.57 3.5-3.5S10.93 5 9 5 5.5 6.57 5.5 8.5 7.07 12 9 12zm0-5c.83 0 1.5.67 1.5 1.5S9.83 10 9 10s-1.5-.67-1.5-1.5S8.17 7 9 7zm7.04 6.81c1.16.84 1.96 1.96 1.96 3.44V19h4v-1.75c0-2.02-3.5-3.17-5.96-3.44zM15 12c1.93 0 3.5-1.57 3.5-3.5S16.93 5 15 5c-.54 0-1.04.13-1.5.35.63.89 1 1.98 1 3.15s-.37 2.26-1 3.15c.46.22.96.35 1.5.35z"
                    />
                  </svg>
                </button>
              </v-badge>
            </div>
            <div class="header_components-info-box_icons-message mr">
              <v-menu offset-y rounded class="message-box">
                <template v-slot:activator="{ on, attrs }">
                  <button v-bind="attrs" v-on="on" class="btn-budget">
                    <v-badge overlap color="#ff0000">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#f0eaea"
                        width="25px"
                        height="25px"
                      >
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path
                          d="M20 4v13.17L18.83 16H4V4h16m0-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 10H6v2h12v-2zm0-3H6v2h12V9zm0-3H6v2h12V6z"
                        />
                      </svg>
                    </v-badge>
                  </button>
                </template>
                <v-list class="menu">
                  <div class="budget-content">
                    <div class="budget-content-heading-2">Mesajlar</div>
                  </div>
                  <div class="budget-content-search">
                    <v-autocomplete
                      clearable
                      placeholder="axtar"
                      dense
                      filled
                      rounded
                    ></v-autocomplete>
                  </div>
                </v-list>
              </v-menu>
            </div>
            <div
              title="Bildirişlər"
              class="header_components-info-box_icons-notification mr"
            >
              <v-menu offset-y rounded>
                <template v-slot:activator="{ on, attrs }">
                  <button v-bind="attrs" v-on="on" class="btn-budget">
                    <v-badge overlap color="#ff0000">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#f0eaea"
                        width="25px"
                        height="25px"
                      >
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path
                          d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"
                        />
                      </svg>
                    </v-badge>
                  </button>
                </template>
                <v-list class="menu">
                  <div class="budget-content budget-content-notification">
                    <div class="budget-content-heading-2">Bildirişlər</div>
                    <br />
                    <div class="budget-content-button_box">
                      <button class="budget-content-button_box-button mr">
                        Sistem
                      </button>
                      <button class="budget-content-button_box-button">
                        Sosial
                      </button>
                    </div>
                  </div>
                </v-list>
              </v-menu>
            </div>
          </div>
          <div class="header_components-info-box-avatar">
            <v-avatar color="grey lighten-2" size="50">
            </v-avatar>
          </div>
          <button class="header_components-info-box-settings">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#f0eaea"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M20 15.31l1.9-1.9c.78-.78.78-2.05 0-2.83L20 8.69V6c0-1.1-.9-2-2-2h-2.69l-1.9-1.9c-.78-.78-2.05-.78-2.83 0L8.69 4H6c-1.1 0-2 .9-2 2v2.69l-1.9 1.9c-.78.78-.78 2.05 0 2.83l1.9 1.9V18c0 1.1.9 2 2 2h2.69l1.9 1.9c.78.78 2.05.78 2.83 0l1.9-1.9H18c1.1 0 2-.9 2-2v-2.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</v-app-bar>

</template>

<script>
import Navigation from "@/components/Navigation.vue";
export default {
  data: () => ({
    btns: [["Large", "lg"]],
    items: ["Azərbaycan", "İngilis", "Rus"],
  }),
  components: {
    Navigation,
  },
};
</script>

