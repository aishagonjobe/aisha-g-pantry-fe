import {connect} from 'react-redux';
import Login from "./components/auth/Login";
import Navigation from "./components/Navigation";
import MyPantryLandingPage from "./components/MyPantryLandingPage";
import {initiateLogin} from "./modules/auth.module";
import {initiateCreateFood, initiateDeleteFood, initiateGetFood, initiateUpdateFood} from "./modules/pantry.module";
import {initiateCreateRecipe, initiateDeleteRecipe, initiateGetRecipe, initiateUpdateRecipeCategory} from "./modules/recipe.module";

function App({
                 dispatch, token, loginFailure, favorite,
                 loginPending, handleLogoutRequest, handleCreateUserRequest,
                 createUserPending, createUserFailure,
                 food, getFoodPending, getFoodFailure, createFoodPending, createFoodFailure,
                 createFoodSuccess, updateFoodPending, updateFoodFailure, updateFoodSuccess,
                 deleteFoodPending, deleteFoodFailure, deleteFoodSuccess,

                 getRecipePending, getRecipeFailure, recipe, createRecipePending, createRecipeFailure,
                 createRecipeSuccess, updateRecipePending, updateRecipeFailure, updateRecipeSuccess,
                 deleteRecipePending, deleteRecipeFailure, deleteRecipeSuccess
}) {
    return (
        <>
            {token ?
                <>
                    <Navigation
                        handleLogoutRequest={handleLogoutRequest}
                    />
                    <MyPantryLandingPage
                    food = {food} favorite={favorite}
                    getFoodPending = {getFoodPending} getFoodFailure={getFoodFailure}
                    createFoodPending={createFoodPending} createFoodFailure={createFoodFailure}
                    createFoodSuccess={createFoodSuccess} updateFoodPending={updateFoodPending}
                    updateFoodFailure={updateFoodFailure} updateFoodSuccess={updateFoodSuccess}
                    deleteFoodPending={deleteFoodPending} deleteFoodFailure={deleteFoodFailure}
                    deleteFoodSuccess={deleteFoodSuccess}

                    handleGetFoodItems={() => dispatch(initiateGetFood())}
                    handleCreateFoodItem={(food) => dispatch(initiateCreateFood(food))}
                    handleUpdateFoodItem={(food) => dispatch(initiateUpdateFood(food))}
                    handleDeleteFoodItem={(food) => dispatch(initiateDeleteFood(food))}

                    recipe = {recipe}
                    getRecipePending = {getRecipePending} getRecipeFailure={getRecipeFailure}
                    createRecipePending={createRecipePending} createRecipeFailure={createRecipeFailure}
                    createRecipeSuccess={createRecipeSuccess} updateRecipePending={updateRecipePending}
                    updateRecipeFailure={updateRecipeFailure} updateRecipeSuccess={updateRecipeSuccess}
                    deleteRecipePending={deleteRecipePending} deleteRecipeFailure={deleteRecipeFailure}
                    deleteRecipeSuccess={deleteRecipeSuccess}

                    handleGetRecipes={() => dispatch(initiateGetRecipe())}
                    handleCreateRecipe={(recipe) => dispatch(initiateCreateRecipe(recipe))}
                    handleUpdateRecipe={(recipe) => dispatch(initiateUpdateRecipeCategory(recipe))}
                    handleDeleteRecipe={(recipe) => dispatch(initiateDeleteRecipe(recipe))}
                    />
                </> : <>
                    <Navigation
                        handleLogoutRequest={handleLogoutRequest}
                    />
                    <Login
                        handleLoginRequest={(credentials) => dispatch(initiateLogin(credentials))}
                        loginFailure={loginFailure}
                        loginPending={loginPending}
                        handleCreateUserRequest={handleCreateUserRequest}
                        createUserPending={createUserPending}
                        createUserFailure={createUserFailure}
                    />
                </>
            }
        </>
    )
}

function mapStateToProps(state) {
    return {
        ...state.auth,
        ...state.pantry,
        ...state.recipe,
        ...state.user
    }
}

export default connect(mapStateToProps)(App);