import {Col, Container, Nav, Row, Tab} from "react-bootstrap";
import PantryPage from "./pantry/PantryPage";
import RecipePage from "./recipes/MyRecipesPage";
import Banner from "./MyPantryBanner.gif"
import AccountSettings from "./auth/AccountSettings";

export default function MyPantryLandingPage({food, handleDeleteFoodItem, handleGetFoodItems, handleCreateFoodItem,
                                                handleUpdateFoodItem, handleGetRecipes, handleCreateRecipe,
                                                handleUpdateRecipe, handleDeleteRecipe, favorite,

                                     getFoodPending, getFoodFailure, createFoodPending, createFoodFailure,
                                     createFoodSuccess, updateFoodPending, updateFoodFailure, updateFoodSuccess,
                                     deleteFoodPending, deleteFoodFailure, deleteFoodSuccess,

                                     getRecipePending, getRecipeFailure, recipe, createRecipePending, createRecipeFailure,
                                     createRecipeSuccess, updateRecipePending, updateRecipeFailure, updateRecipeSuccess,
                                     deleteRecipePending, deleteRecipeFailure, deleteRecipeSuccess}) {
    return (
        <>
            <Container fluid>
                <Row>
                    <img src={Banner} alt={"Let's Get Cooking!"}/>
                </Row>
                <br/>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="second" onClick={handleGetFoodItems}>Pantry</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third" onClick={handleGetRecipes}>Recipes</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Settings</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="second">
                                    <PantryPage
                                        food = {food} favorite={favorite}
                                        getFoodPending = {getFoodPending} getFoodFailure={getFoodFailure}
                                        createFoodPending={createFoodPending} createFoodFailure={createFoodFailure}
                                        createFoodSuccess={createFoodSuccess} updateFoodPending={updateFoodPending}
                                        updateFoodFailure={updateFoodFailure} updateFoodSuccess={updateFoodSuccess}
                                        deleteFoodPending={deleteFoodPending} deleteFoodFailure={deleteFoodFailure}
                                        deleteFoodSuccess={deleteFoodSuccess}
                                        handleGetFoodItems={handleGetFoodItems} handleCreateFoodItem={handleCreateFoodItem}
                                        handleUpdateFoodItem={handleUpdateFoodItem} handleDeleteFoodItem={handleDeleteFoodItem}
                                    />
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <RecipePage
                                        recipe = {recipe}
                                        getRecipePending = {getRecipePending} getRecipeFailure={getRecipeFailure}
                                        createRecipePending={createRecipePending} createRecipeFailure={createRecipeFailure}
                                        createRecipeSuccess={createRecipeSuccess} updateRecipePending={updateRecipePending}
                                        updateRecipeFailure={updateRecipeFailure} updateRecipeSuccess={updateRecipeSuccess}
                                        deleteRecipePending={deleteRecipePending} deleteRecipeFailure={deleteRecipeFailure}
                                        deleteRecipeSuccess={deleteRecipeSuccess}
                                        handleGetRecipes={handleGetRecipes} handleCreateRecipe={handleCreateRecipe}
                                        handleUpdateRecipe={handleUpdateRecipe} handleDeleteRecipe={handleDeleteRecipe}
                                    />
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <AccountSettings/>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>

        </>
    )
}